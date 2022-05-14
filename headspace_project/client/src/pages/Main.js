import { useState } from 'react'
import ChooseChar from '../components/ChooseChar'
import Game from '../components/Game'

const Main = ({
  payload,
  user,
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
  setAchieve,
  points,
  setPoints,
  status,
  setStatus,
  updates,
  setUpdates
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
          payload={payload}
          user={user}
          charID={charID}
          charName={charName}
          avatar={avatar}
          level={level}
          stats={stats}
          setStats={setStats}
          achieveArr={achieveArr}
          setAchieve={setAchieve}
          points={points}
          setPoints={setPoints}
          status={status}
          setStatus={setStatus}
          updates={updates}
          setUpdates={setUpdates}
        />
      )}
    </div>
  )
}

export default Main
