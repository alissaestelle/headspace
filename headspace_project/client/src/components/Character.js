import { useState } from 'react'
import Achievement from './Achievement'

const Character = ({
  charID,
  charName,
  avatar,
  stats,
  achieveArr,
  achievement,
  setAchievement,
  points,
  setPoints,
  updates,
  setUpdates
}) => {
  let [display, setDisplay] = useState(0)
  let [levelCount, setLevelCount] = useState(0)

  const setInitArr = (elem, idx) => {
    let element = achieveArr.shift()
    setAchievement({
      ...achievement,
      characterID: charID,
      title: element.title,
      type: element.type,
      points: element.points
    })
    achieveArr.filter((elem, idx) => {
      return elem !== idx
    })
    setUpdates(achieveArr)
    let initPoints = 0
    initPoints = initPoints + elem.points
    setPoints(initPoints)
    setLevelCount(levelCount + 1)

    localStorage.setItem('updates', JSON.stringify(achieveArr))
    localStorage.setItem('aTitle', JSON.stringify(element.title))
    localStorage.setItem('aType', JSON.stringify(element.type))
    localStorage.setItem('aPoints', JSON.stringify(element.points))
    localStorage.setItem('stats', JSON.stringify(initPoints))
    setDisplay(localStorage.getItem(JSON.parse(stats)))
  }

  const test = (elem, idx) => {
    let element = updates.shift()
    setAchievement({
      ...achievement,
      characterID: charID,
      title: element.title,
      type: element.type,
      points: element.points
    })

    updates.filter((elem, idx) => {
      return elem !== idx
    })

    setUpdates(updates)
    let totalPoints = points + elem.points
    setPoints(totalPoints)
    setLevelCount(levelCount + 1)
    console.log(levelCount)

    localStorage.setItem('updates', JSON.stringify(updates))
    localStorage.setItem('aTitle', JSON.stringify(element.title))
    localStorage.setItem('aType', JSON.stringify(element.type))
    localStorage.setItem('aPoints', JSON.stringify(element.points))
    localStorage.setItem('stats', JSON.stringify(totalPoints))
  }

  return (
    <div className="Character">
      <div className="User-Char-Grid">
        <h1 id="User-Char-Name">{charName}</h1>
        <img id="User-Char-Img" src={avatar} alt={charName} />
        <p>
          <span id="Score">Score:</span>
          <span id="Points-Display">{!updates ? points : stats + points}</span>
        </p>
      </div>
      <div className="Achieve-Container">
        {!updates
          ? achieveArr.map(
              (elem, idx) =>
                idx < 3 && (
                  <Achievement
                    key={elem.title}
                    title={elem.title}
                    type={elem.type}
                    points={elem.points}
                    setInitArr={() => setInitArr(elem, idx)}
                  />
                )
            )
          : updates.map(
              (elem, idx) =>
                idx < 3 && (
                  <Achievement
                    key={elem.title}
                    title={elem.title}
                    type={elem.type}
                    points={elem.points}
                    setInitArr={() => test(elem, idx)}
                  />
                )
            )}
      </div>
    </div>
  )
}

export default Character

// Create a Post for Achievements
