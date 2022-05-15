import Client from '../services/API'
import { localHost } from '../services/API'
import { useEffect } from 'react'
import Character from './Character'

const Game = ({
  user,
  payload,
  charID,
  charName,
  avatar,
  level,
  stats,
  setStats,
  achieveArr,
  setAchieve,
  points,
  setPoints,
  updates,
  setUpdates
}) => {
  useEffect(() => {
    const getCharacter = async () => {
      let res = await Client.get(`${localHost}/account/character/${charID}`)
      console.log(res.data)
    }
    getCharacter()
  }, [])

  return (
    <div className="Game-Grid-Cont">
      <div className="Game-Grid">
        <div className="Info">
          <h1>
            Game
            <br /> Instructions
            <br />
            Go
            <br /> Here
          </h1>
        </div>
        <div className="Center">
          <Character
            user={user}
            payload={payload}
            charName={charName}
            avatar={avatar}
            level={level}
            stats={stats}
            setStats={setStats}
            achieveArr={achieveArr}
            setAchieve={setAchieve}
            points={points}
            setPoints={setPoints}
            updates={updates}
            setUpdates={setUpdates}
          />
        </div>
        <div className="Stats">
          <h1>
            Player
            <br /> Stats
            <br /> Go <br /> Here
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Game
