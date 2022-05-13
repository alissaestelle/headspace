const Achievement = ({ title, points }) => {
  return (
    // useEffect(() => {

    // })

    <div>
      {/* <h2>Level Bar Goes Here</h2> */}
      <div className="Achieve-Card">
        <h4>{title}</h4>
        <h3>{points}</h3>
      </div>
    </div>
  )
}

export default Achievement
