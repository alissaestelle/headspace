import { useState } from 'react'
import ChooseChar from '../components/ChooseChar'
import Game from '../components/Game'

const Main = ({
  payload,
  setUser,
  charID,
  charName,
  setCharName,
  avatar,
  setAvatar,
  level,
  setLevel,
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
  let [character1, setCharacter1] = useState({
    userID: payload.id,
    name: '',
    avatar: 'https://imgur.com/qpKcK9x.png',
    level: 1
  })

  let [character2, setCharacter2] = useState({
    userID: payload.id,
    name: '',
    avatar: 'https://imgur.com/Fa5pjv7.png',
    level: 1
  })

  return (
    <div className="Main">
      {!charName ? (
        <ChooseChar
          payload={payload}
          setUser={setUser}
          char1={character1}
          setChar1={setCharacter1}
          char2={character2}
          setChar2={setCharacter2}
          setCharName={setCharName}
          setAvatar={setAvatar}
          setLevel={setLevel}
        />
      ) : (
        <Game
          setUser={setUser}
          charID={charID}
          charName={charName}
          avatar={avatar}
          level={level}
          stats={stats}
          setStats={setStats}
          achieveArr={achieveArr}
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
      )}
    </div>
  )
}

export default Main
