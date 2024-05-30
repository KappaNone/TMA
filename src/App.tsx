import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import twaLogo from "./assets/tapps.png";
import viteLogo from "/vite.svg";
import "./App.css";

import WebApp from "@twa-dev/sdk";

import eruda from "eruda";
eruda.init();

function App() {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  
  const startGame = () => {
    setRandomNumber(Math.floor(Math.random() * 10));
    setCount(0);
  }

  const endGame = () => {
    WebApp.showAlert(allertText());
    isWinner() ? startGame() : setCount(0);
  }

  const isWinner = () => {
    return count == randomNumber ? true : false;
  };
  
  const allertText = () => {
    return isWinner()
      ? `Красава, нажал ровно ${randomNumber} раз`
      : `Ты еблан, надо было нажать на кнопку ровно ${randomNumber} раз, а ты нажал ${count}. Давай заново.`;
  };
  
  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    console.log(count)
  }, [count]);

  return (
    <>
      <div>
        <a href="https://ton.org/dev" target="_blank">
          <img src={twaLogo} className="logo" alt="TWA logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Gleb mega puzo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {`Нажми на кнопку ровно ${randomNumber} раз`}
        </button>
      </div>
      {/*  */}
      <div className="card">
        <button onClick={endGame}>Проверить</button>
      </div>
    </>
  );
}

export default App;
