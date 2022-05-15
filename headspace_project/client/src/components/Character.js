import { useEffect } from 'react'
import Achievement from './Achievement'

const Character = ({
  user,
  payload,
  charName,
  avatar,
  level,
  stats,
  setStats,
  achieveArr,
  setAchieve,
  points,
  setPoints,
  updates,
  setUpdates
}) => {
  // setUpdates(localStorage.setItem(Array))

  const test = (elem, idx) => {
    let element = achieveArr.shift()
    console.log(element)
    let newArr = achieveArr.filter((elem, idx) => {
      return elem !== idx
    })
    setAchieve(newArr)
    localStorage.setItem('updates', JSON.stringify(newArr))
    console.log(newArr)
  }

  return (
    <div className="Character">
      <div className="User-Char-Grid">
        <h1 id="User-Char-Name">{charName}</h1>
        <img id="User-Char-Img" src={avatar} alt={charName} />
        <h1 id="User-Char-Level">Level: {level}</h1>
      </div>
      <div className="Achieve-Container"></div>
      {achieveArr.map(
        (elem, idx) =>
          idx < 3 && (
            <Achievement
              key={elem.title}
              payload={payload}
              title={elem.title}
              type={elem.type}
              points={elem.points}
              test={() => test(elem, idx)}
            />
          )
      )}
    </div>
  )
}

export default Character

// Create a Post for Achievements
