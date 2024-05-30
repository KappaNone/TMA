import { useState } from 'react'
import reactLogo from './assets/react.svg'
import twaLogo from './assets/tapps.png'
import viteLogo from '/vite.svg'
import './App.css'

import WebApp from '@twa-dev/sdk'

import eruda from "eruda";
eruda.init();

function App() {
  const [count, setCount] = useState(0)

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
          Бить ребенка
        </button>
      </div>
      {/*  */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Ну ты тип, избил уже ${count} детей`)}>
            Сколько детей избито?
        </button>
      </div>
    </>
  )
}

export default App
