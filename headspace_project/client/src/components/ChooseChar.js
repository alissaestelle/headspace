import { CharRequest } from '../services/Requests'

const ChooseChar = ({
  character1,
  setCharacter1,
  character2,
  setCharacter2,
  payload,
  setSuccess
}) => {
  const handleCharOne = (e) => {
    setCharacter1({
      ...character1,
      name: e.target.value
    })
  }

  const handleCharTwo = (e) => {
    setCharacter2({
      ...character2,
      name: e.target.value
    })
  }

  const submitCharOne = async (e) => {
    e.preventDefault()
    await CharRequest(character1)
    console.log('Character Successfully Created!')
    console.log(character1)
    setSuccess(true)
    setCharacter1({
      userID: payload.id,
      name: '',
      avatar: 'https://imgur.com/6Zncrsk.png',
      level: 1
    })
  }

  const submitCharTwo = async (e) => {
    e.preventDefault()
    await CharRequest(character2)
    console.log('Character Successfully Created!')
    setSuccess(true)
    setCharacter2({
      userID: payload.id,
      name: '',
      avatar: 'https://imgur.com/hHbsMlX.png',
      level: 1
    })
  }

  return (
    <div className="ChooseChar">
      <div className="Char-Container">
        <h1>Choose a Character</h1>
        <form onSubmit={submitCharOne}>
          <img
            id="Girl"
            src="https://imgur.com/6Zncrsk.png"
            alt="Character (Girl)"
          />
          <input
            required
            placeholder="Name"
            value={character1.name}
            onChange={handleCharOne}
          ></input>
          <br />
          <button id="Girl-Select">Select</button>
        </form>
        <form onSubmit={submitCharTwo}>
          <img
            id="Boy"
            src="https://imgur.com/hHbsMlX.png"
            alt="Character (Boy)"
          />
          <input
            required
            placeholder="Name"
            value={character2.name}
            onChange={handleCharTwo}
          ></input>
          <br />
          <button id="Boy-Select">Select</button>
        </form>
      </div>
    </div>
  )
}

export default ChooseChar
