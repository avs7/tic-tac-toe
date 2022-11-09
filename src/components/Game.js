import Box from "./Box"
import { useState, useEffect } from "react"
import GameOver from "./GameOver"
import Confetti from "react-confetti"

export default function Game() {
  const [box, setBox] = useState(["", "", "", "", "", "", "", "", ""])
  const [player, setPlayer] = useState(true)
  const [gameOver, setGameOver] = useState(false)
  const [result, setResult] = useState("")

  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  function checkWinner() {
    const winner = winCombos.some(combo => {
      return (
        box[combo[0]] === box[combo[1]] &&
        box[combo[1]] === box[combo[2]] &&
        (box[combo[0]] === "X" || box[combo[0]] === "O")
      )
    })
    if (winner) {
      setGameOver(true)
      setResult(player ? "X" : "O")
    }
  }

  function handleClick(e, i) {
    if (e === "" && !gameOver) {
      player ? setBox((box[i] = "X")) : setBox((box[i] = "O"))
      setBox([...box])
      checkWinner()
      setPlayer(prevPlayer => !prevPlayer)
    }
  }

  let boxComponents = box.map((e, i) => {
    return (
      <Box
        boxClick={() => {
          handleClick(e, i)
        }}
        status={e}
        key={i}
      />
    )
  })

  function resetGame() {
    console.log("new game")
    setBox(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
    setGameOver(false)
  }

  return (
    <>
      <div className="game--container">
        <div className="game">
          {!gameOver ? (
            boxComponents
          ) : (
            <>
              <GameOver result={result} newGame={resetGame} />
              <Confetti />
            </>
          )}
        </div>
      </div>
    </>
  )
}
