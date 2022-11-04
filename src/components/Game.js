import Box from "./Box";
import { useState } from "react";

export default function Game() {

  const [box, setBox] = useState([
    {state: "", position: 0},
    {state: "", position: 1},
    {state: "", position: 2},
    {state: "", position: 3},
    {state: "", position: 4},
    {state: "", position: 5},
    {state: "", position: 6},
    {state: "", position: 7},
    {state: "", position: 8}
    ])

    let boxComponents = box.map((e, i) => {
      <Box />
    })
console.log(boxComponents)

  return (
    <div className="game--container">
      <div className="game">
        {boxComponents}
      </div>
    </div>
  );
}