import { useEffect } from 'react'
import { AddAchieve } from '../services/Requests'
import ScoreBar from './ScoreBar'

const Stats = ({ achievement }) => {
  // useEffect(() => {
  //   const storeAchieve = async () => {
  //     let res = await AddAchieve(achievement)
  //     console.log(res)
  //   }
  //   storeAchieve()
  // }, [])
  return (
    <div>
      <ScoreBar />
    </div>
  )
}

export default Stats
