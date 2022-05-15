import Client from '../services/API'
import { localHost } from '../services/API'
import { useState, useEffect } from 'react'
import Character from './Character'
import { CheckSession } from '../services/Requests'
import Stats from './Stats'

const Game = ({
  charID,
  charName,
  avatar,
  level,
  stats,
  setStats,
  achieveArr,
  points,
  setPoints,
  updates,
  setUpdates,
  aTitle,
  setTitle,
  aType,
  setType,
  aPoints,
  storePoints
}) => {
  // useEffect(() => {
  //   const getCharacter = async () => {
  //     let character = await Client.get(
  //       `${localHost}/account/character/${charID}`
  //     )
  //     console.log(character.data)
  //   }
  //   getCharacter()
  // }, [])

  let [achievement, setAchievement] = useState({
    characterID: '',
    title: '',
    type: '',
    points: 0
  })

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
            charID={charID}
            charName={charName}
            avatar={avatar}
            level={level}
            stats={stats}
            setStats={setStats}
            achieveArr={achieveArr}
            achievement={achievement}
            setAchievement={setAchievement}
            points={points}
            setPoints={setPoints}
            updates={updates}
            setUpdates={setUpdates}
            aTitle={aTitle}
            setTitle={setTitle}
            aType={aType}
            setType={setType}
            aPoints={aPoints}
            storePoints={storePoints}
          />
        </div>
        <div className="Stats">
          <Stats achievement={achievement} setAchievement={setAchievement} />
        </div>
      </div>
    </div>
  )
}

export default Game
