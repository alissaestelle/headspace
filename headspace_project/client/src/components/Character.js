import { useEffect } from 'react'
import { GetAchievements } from '../services/Requests'
import Achievement from './Achievement'

const Character = ({
  payload,
  charName,
  avatar,
  stats,
  setStats,
  level,
  achievements,
  setAchieve,
  points,
  setPoints
}) => {
  useEffect(() => {
    const getAchievements = async () => {
      let results = await GetAchievements()
      setAchieve(results)
      console.log(results)
    }
    getAchievements()
  }, [])

  // const postAchievement = async (e) => {
  //   let results = await
  // }

  const testWin = (idx) => {
    let done = achievements.splice(idx, 1)
    console.log(done)
    let newArr = achievements.filter((achievement, idx) => {
      return achievement !== idx
    })
    console.log(newArr)
    setAchieve(newArr)
  }

  return (
    <div className="Character">
      <div className="User-Char-Grid">
        <h2 id="User-Char-Name">{charName}</h2>
        <img id="User-Char-Img" src={avatar} alt={charName} />
        <h2 id="User-Char-Level">Level: {level}</h2>
      </div>
      <div className="Achieve-Container"></div>
      {achievements.map(
        (achievement, idx) =>
          idx < 3 && (
            <Achievement
              payload={payload}
              key={achievement.id}
              title={achievement.title}
              type={achievement.type}
              points={achievement.points}
              testWin={() => testWin(idx)}
            />
          )
      )}
    </div>
  )
}

export default Character
