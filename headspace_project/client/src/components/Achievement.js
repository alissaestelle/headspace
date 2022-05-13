const Achievement = ({ title, points }) => {
  return (
    <div>
      {/* <h2>Level Bar Goes Here</h2> */}
      <div className="Achieve-Card">
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <h3>{points}</h3>
        </div>
      </div>
    </div>
  )
}

export default Achievement
