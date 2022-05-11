import { useState } from 'react'
import ChooseChar from '../components/ChooseChar'
import Game from '../components/Game'

const Main = ({ user, payload, success, setSuccess }) => {
  let [character1, setCharacter1] = useState({
    userID: payload.id,
    name: '',
    avatar: 'https://imgur.com/6Zncrsk.png',
    level: 1
  })

  let [character2, setCharacter2] = useState({
    userID: payload.id,
    name: '',
    avatar: 'https://imgur.com/hHbsMlX.png',
    level: 1
  })

  return (
    <div className="Main">
      {!success ? (
        <ChooseChar
          character1={character1}
          setCharacter1={setCharacter1}
          character2={character2}
          setCharacter2={setCharacter2}
          payload={payload}
          setSuccess={setSuccess}
        />
      ) : (
        <Game character1={character1} setCharacter1={setCharacter1} />
      )}
    </div>
  )
}

export default Main
