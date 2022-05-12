// 'https://imgur.com/qpKcK9x.png'
// 'https://imgur.com/Fa5pjv7.png'

import { useNavigate } from 'react-router-dom'
import { CharRequest } from '../services/Requests'

const ChooseChar = ({
  char1,
  setChar1,
  char2,
  setChar2,
  payload,
  setCharSuccess,
  setFemChar
}) => {
  let navigate = useNavigate()

  const handleCharOne = (e) => {
    setChar1({
      ...char1,
      name: e.target.value
    })
  }

  const handleCharTwo = (e) => {
    setChar2({
      ...char2,
      name: e.target.value
    })
  }

  const submitCharOne = async (e) => {
    e.preventDefault()
    await CharRequest(char1)
    console.log('Character Successfully Created!')
    console.log(char1)
    setFemChar(true)
    setCharSuccess(true)
    setChar1({
      userID: payload.id,
      name: '',
      avatar: 'https://imgur.com/qpKcK9x.png',
      level: 1
    })
  }

  const submitCharTwo = async (e) => {
    e.preventDefault()
    await CharRequest(char2)
    console.log('Character Successfully Created!')
    setCharSuccess(true)
    setChar2({
      userID: payload.id,
      name: '',
      avatar: 'https://imgur.com/Fa5pjv7.png',
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
            src="https://imgur.com/qpKcK9x.png"
            alt="Character (Girl)"
          />
          <input
            required
            placeholder="Name"
            value={char1.name}
            onChange={handleCharOne}
          ></input>
          <br />
          <button id="Girl-Select">Select</button>
        </form>
        <form onSubmit={submitCharTwo}>
          <img
            id="Boy"
            src="https://imgur.com/Fa5pjv7.png"
            alt="Character (Boy)"
          />
          <input
            required
            placeholder="Name"
            value={char2.name}
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
