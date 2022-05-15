const Achievement = ({ payload, title, type, points, test }) => {
  // Put Req
  return (
    <div className="Achieve-Card" onClick={test}>
      <h4>{title}</h4>
      <h3>{points}</h3>
    </div>
  )
}

export default Achievement
