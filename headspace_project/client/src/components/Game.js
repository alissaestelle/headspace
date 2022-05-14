import Client from '../services/API'
import { localHost } from '../services/API'
import { useEffect } from 'react'
import Character from './Character'

const Game = ({
  payload,
  user,
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
    <div className="Game">
      <Character
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
  )
}

export default Game
