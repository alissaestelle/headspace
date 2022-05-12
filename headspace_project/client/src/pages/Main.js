import { useState } from 'react'
import ChooseChar from '../components/ChooseChar'
import Game from '../components/Game'

const Main = ({ payload, charID, charName, avatar }) => {
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
          char1={character1}
          setChar1={setCharacter1}
          char2={character2}
          setChar2={setCharacter2}
          payload={payload}
        />
      ) : (
        <Game charID={charID} charName={charName} avatar={avatar} />
      )}
    </div>
  )
}

export default Main
