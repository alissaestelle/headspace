import { useEffect } from 'react'
import { AddAchieve } from '../services/Requests'

const Stats = ({ charID, level, aType }) => {
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
      <h2>{aType}</h2>
    </div>
  )
}

export default Stats
