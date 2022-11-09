import "./App.css"
import Navbar from "./components/Navbar"
import Game from "./components/Game"

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Game />
      </div>
    </>
  )
}

export default App
