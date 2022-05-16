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
        <div className="Left">
          <h1>Guide</h1>
          <p>
            1. If the opportunity to complete an achievement has passed, no
            worries! Wait until tomorrow.
            <br />
            <br />
            2. Google any techniques or terms you're unsure about.
            <br />
            <br />
            3. Substitute any specifics with personal preferences if needed:
            <br />
            <br />
            Ex: The achievement prompt involves a scent but you're allergic?
            Swap the provided scent with one that works better.
          </p>
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
        <div className="Right">
          <Stats charID={charID} aType={aType} level={level} />
        </div>
      </div>
    </div>
  )
}

export default Game
