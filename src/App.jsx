import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {Advice()},[])


  async function Advice () {
     const data = await axios.get("https://api.adviceslip.com/advice")
     const res = data.data.slip
     setData(res)
       }

  const handleClick = () => Advice()

  return (
    <div className="App">
      <main className='content'>
        <p className='advice-id'>Advice #{data.id} </p>
        <p className='advice-txt'> "{data.advice}" </p>

        <picture className='divider'>
        <source srcSet='/images/pattern-divider-desktop.svg' media='(min-width: 400px)'/>
        <img src="/images/pattern-divider-mobile.svg" alt="" />
        </picture>

        <button className="dice-btn" onClick={handleClick}>
        <img className='dice' src="/images/icon-dice.svg" alt="" />
        </button>
      </main>

    </div>
  )
}

export default App
