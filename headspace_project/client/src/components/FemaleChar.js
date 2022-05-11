import { useEffect } from 'react'
import { localHost } from '../services/API'
import Client from '../services/API'

const FemaleChar = ({ character, setCharacter }) => {
  useEffect(() => {
    const getChar = async () => {
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
    console.log(character)
    getChar()
  }, [])

  return (
    <div className="Fem-Container">
      <div>
        <h2>{character.name}</h2>
      </div>
      <div className="Fem-Char">
        <img src={character.avatar} alt={character.name} />
      </div>
    </div>
  )
}

export default FemaleChar
