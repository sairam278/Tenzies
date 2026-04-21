import React from "react"
import Die from "./Die.jsx";
import { useState, useRef, useEffect } from "react"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import { useWindowSize } from './useWindowSize';
export default function App() {

  const [dice, setDice] = useState(() => generateAllNewDice())

  const { width, height } = useWindowSize();

  const focus = useRef(null);

  const allHeld = dice.every(die => die.isHeld)
  const firstValue = dice[0].value
  const allSameValue = dice.every(die => die.value === firstValue)

  const gameWon = allHeld && allSameValue



  if (allHeld && allSameValue) {
    console.log("You won!")
  }





  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }))

    // const newDice = []        

    // for (let i = 0; i < 10; i++)
    // {
    //   const randomNum = Math.ceil(Math.random() * 6)
    //   newDice.push(randomNum)
    // }

    // return newDice
  }


  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((Die) => Die.id === id ? { ...Die, isHeld: !Die.isHeld } : Die)
    )
  }

  const diceElements = dice.map((dieObj) => {
    return (
      <Die key={dieObj.id} id={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} hold={hold} />
    )
  })

  function rollDice() {
    setDice(prevDice =>
      prevDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    )

    if (gameWon) {
      setDice(generateAllNewDice())
      
    }

  }

  useEffect(()=>{
    gameWon && focus.current.focus()
  }, [gameWon])



  return (
    <main>
      {gameWon && <Confetti width={width} height={height} numberOfPieces={350} recycle={false} gravity={0.3} />}
      <h1 className="title" >Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>

      <button className="roll-dice" onClick={rollDice} ref={focus}>{gameWon ? "New Game" : "Roll Dice"}</button>
    </main>
  )
}