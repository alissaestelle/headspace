import { useEffect } from 'react'
import { GetAchievements } from '../services/Requests'
import Achievement from './Achievement'

const Character = ({
  charName,
  avatar,
  level,
  achievements,
  setAchievements
}) => {
  useEffect(() => {
    const getAchievements = async () => {
      let results = await GetAchievements()
      setAchievements(results)
    }
    getAchievements()
  }, [])

  return (
    <div>
      <div className="User-Char-Grid">
        <div>
          <h2>{charName}</h2>
        </div>
        <div className="User-Char">
          <img src={avatar} alt={charName} />
        </div>
      </div>
      {/* <h2>Level: 1</h2> */}
      <div>
        {achievements.map(
          (achievement, idx) =>
            idx < 3 && (
              <Achievement
                key={achievement.id}
                title={achievement.title}
                points={achievement.points}
              />
            )
        )}
      </div>
    </div>
  )
}

export default Character
