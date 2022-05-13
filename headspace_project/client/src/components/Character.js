import { useEffect } from 'react'
import { GetAchievements } from '../services/Requests'

const Character = ({ charName, avatar }) => {
  useEffect(() => {
    const getAchievements = async () => {
      let results = await GetAchievements()
      console.log(results)
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
    </div>
  )
}

export default Character
