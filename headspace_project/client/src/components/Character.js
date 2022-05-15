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

  const setInitArr = (elem, idx) => {
    let element = achieveArr.shift()
    console.log(element)
    achieveArr.filter((elem, idx) => {
      return elem !== idx
    })
    setUpdates(achieveArr)
    localStorage.setItem('updates', JSON.stringify(achieveArr))
    let initPoints = 0
    initPoints = initPoints + elem.points
    setPoints(initPoints)
    localStorage.setItem('stats', JSON.stringify(initPoints))
  }

  const test = (elem, idx) => {
    let element = updates.shift()
    console.log(element)
    updates.filter((elem, idx) => {
      return elem !== idx
    })
    setUpdates(updates)
    localStorage.setItem('updates', JSON.stringify(updates))
    console.log(updates)
    let totalPoints = points + elem.points
    setPoints(totalPoints)
    localStorage.setItem('stats', JSON.stringify(totalPoints))
  }

  return (
    <div className="Character">
      <div className="User-Char-Grid">
        <h1 id="User-Char-Name">{charName}</h1>
        <img id="User-Char-Img" src={avatar} alt={charName} />
        <h1 id="User-Char-Level">Level: {level}</h1>
      </div>
      <div className="Achieve-Container">
        {!updates
          ? achieveArr.map(
              (elem, idx) =>
                idx < 3 && (
                  <Achievement
                    key={elem.title}
                    payload={payload}
                    title={elem.title}
                    type={elem.type}
                    points={elem.points}
                    test={() => setInitArr(elem, idx)}
                  />
                )
            )
          : updates.map(
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
    </div>
  )
}

export default Character

// Create a Post for Achievements
