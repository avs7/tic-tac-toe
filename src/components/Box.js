export default function Box(props) {
  return (
    <div className="box" onClick={props.boxClick}>
      {props.status}
    </div>
  )
}
