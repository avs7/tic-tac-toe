import Box from "./Box"
import { useState } from "react"

export default function Game() {
  const [box, setBox] = useState([
    { status: "", position: 0 },
    { status: "", position: 1 },
    { status: "", position: 2 },
    { status: "", position: 3 },
    { status: "", position: 4 },
    { status: "", position: 5 },
    { status: "", position: 6 },
    { status: "", position: 7 },
    { status: "", position: 8 },
  ])

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


  const [player, setPlayer] = useState(true)

  function handleClick(clickedBox) {
    if (clickedBox.status === "") {
      player === true ? (clickedBox.status = "X") : (clickedBox.status = "O")
      setBox([...box])
      setPlayer(prevPlayer => !prevPlayer)
    }
  }

  let boxComponents = box.map(e => {
    return (
      <Box
        boxClick={() => {
          handleClick(e)
        }}
        position={e.position}
        status={e.status}
        key={e.position}
      />
    )
  })

  return (
    <div className="game--container">
      <div className="game">{boxComponents}</div>
    </div>
  )
}
