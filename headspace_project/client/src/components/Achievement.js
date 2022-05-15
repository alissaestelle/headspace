const Achievement = ({ title, type, points, setInitArr }) => {
  // Put Req
  return (
    <div className="Achieve-Card" onClick={setInitArr}>
      {/* <form> */}
      <h4>{title}</h4>
      <h3>{points}</h3>
      <input type="hidden" />
      {/* </form> */}
    </div>
  )
}

export default Achievement
