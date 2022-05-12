import { useEffect } from 'react'
import { localHost } from '../services/API'
import Client from '../services/API'

const FChar = ({ character, setCharacter }) => {
  useEffect(() => {
    const getCharOne = async () => {
      let res = await Client.get(
        `${localHost}/account/character/${character.userID}`
      )
      let thisChar = res.data
      setCharacter({
        userID: thisChar.userID,
        name: thisChar.name,
        avatar: thisChar.avatar,
        level: thisChar.level
      })
    }
    getCharOne()
  }, [])

  return (
    <div className="User-Char-Grid">
      <div>
        <h2>{character.name}</h2>
      </div>
      <div className="User-Char">
        <img src={character.avatar} alt={character.name} />
      </div>
    </div>
  )
}

export default FChar
