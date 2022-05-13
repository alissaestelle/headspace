// 'https://imgur.com/qpKcK9x.png'
// 'https://imgur.com/Fa5pjv7.png'

import { CharRequest } from '../services/Requests'

const ChooseChar = ({
  payload,
  char1,
  setChar1,
  char2,
  setChar2,
  setCharName,
  setAvatar,
  setLevel
}) => {
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
    let results = await CharRequest(char1)
    console.log(char1)
    setCharName(char1.name)
    setAvatar(char1.avatar)
    setLevel(char1.level)
    localStorage.setItem('charID', results.id)
    localStorage.setItem('charName', char1.name)
    localStorage.setItem('avatar', char1.avatar)
    localStorage.setItem('level', char1.level)
    console.log('Character Successfully Created!')
    setChar1({
      userID: payload.id,
      name: '',
      avatar: 'https://imgur.com/qpKcK9x.png',
      level: 1,
      stats: 0
    })
  }

  const submitCharTwo = async (e) => {
    e.preventDefault()
    let results = await CharRequest(char2)
    console.log(char2)
    setCharName(char2.name)
    setAvatar(char2.avatar)
    setLevel(char2.level)
    localStorage.setItem('charID', results.id)
    localStorage.setItem('charName', char2.name)
    localStorage.setItem('avatar', char2.avatar)
    localStorage.setItem('level', char2.level)
    console.log('Character Successfully Created!')
    setChar2({
      userID: payload.id,
      name: '',
      avatar: 'https://imgur.com/Fa5pjv7.png',
      level: 1,
      stats: 0
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
