import icon from "./image.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={icon} />
      <h4>Home</h4>
      <h4>More Games</h4>
    </div>
  );
}