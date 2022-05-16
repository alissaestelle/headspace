const Stats = ({ charID, level, aType, stats, points }) => {
  // useEffect(() => {
  //   const storeAchieve = async () => {
  //     let res = await AddAchieve(achievement)
  //     console.log(res)
  //   }
  //   storeAchieve()
  // }, [])
  return (
    <div className="Stats">
      <h2>
        <span id="charID">ID: {charID}</span>
      </h2>
      <h2>Level: {level}</h2>
      <h2>{!aType ? <h3>Beginner</h3> : aType}</h2>
      {points > 48 ? <h2>Level 1 Complete!</h2> : null}
      <h3></h3>
    </div>
  )
}

export default Stats
