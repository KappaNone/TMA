import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import twaLogo from "./assets/tapps.png";
import viteLogo from "/vite.svg";
import "./App.css";

import WebApp from "@twa-dev/sdk";

import eruda from "eruda";
eruda.init();

function App() {
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 10);
    return randomNum == 0 ? randomNum + 1 : randomNum;
  };

  const startGame = () => {
    setRandomNumber(generateRandomNumber());
    setCount(0);
  };

  const win = () => {
    startGame();
    setScore(score => score + 1)
  }

  const lose = () => {
    setCount(0);
    setScore(0);
  }

  const endGame = () => {
    WebApp.showAlert(allertText());
    isWinner() ? win() : lose();
  };

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
          <code>{`Your score: ${score}`}</code>
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
