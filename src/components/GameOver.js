import React from "react"

export default function GameOver(props) {
  return (
    <div className="game-over">
      <h3>Game Over</h3>
      <h1>{props.result} WINS</h1>
      <button className="play-again" onClick={props.newGame}>
        Play Again
      </button>
    </div>
  )
}
