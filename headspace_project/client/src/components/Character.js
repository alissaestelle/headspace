import { useState, useEffect } from 'react'
import { AddAchieve } from '../services/Requests'
import Achievement from './Achievement'
import Stats from './Stats'

const Character = ({
  charID,
  charName,
  avatar,
  level,
  stats,
  setStats,
  achieveArr,
  achievement,
  setAchievement,
  points,
  setPoints,
  updates,
  setUpdates,
  aTitle,
  setTitle,
  aType,
  setType,
  aPoints,
  storePoints
}) => {
  let [clicked, toggleClicked] = useState(false)

  const setInitArr = (elem, idx) => {
    let element = achieveArr.shift()
    setAchievement({
      ...achievement,
      characterID: charID,
      title: element.title,
      type: element.type,
      points: element.points
    })
    console.log(aTitle)
    console.log(aType)
    console.log(aPoints)
    setTitle(element.title)
    setType(element.type)
    storePoints(element.points)
    achieveArr.filter((elem, idx) => {
      return elem !== idx
    })
    setUpdates(achieveArr)
    let initPoints = 0
    initPoints = initPoints + elem.points
    setPoints(initPoints)

    localStorage.setItem('updates', JSON.stringify(achieveArr))
    localStorage.setItem('aTitle', JSON.stringify(element.title))
    localStorage.setItem('aType', JSON.stringify(element.type))
    localStorage.setItem('aPoints', JSON.stringify(element.points))
    localStorage.setItem('stats', JSON.stringify(initPoints))

    toggleClicked(true)
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

    setTitle(element.title)
    setType(element.type)
    storePoints(element.points)

    updates.filter((elem, idx) => {
      return elem !== idx
    })

    setUpdates(updates)
    let totalPoints = points + elem.points
    setPoints(totalPoints)

    localStorage.setItem('updates', JSON.stringify(updates))
    localStorage.setItem('aTitle', JSON.stringify(element.title))
    localStorage.setItem('aType', JSON.stringify(element.type))
    localStorage.setItem('aPoints', JSON.stringify(element.points))
    localStorage.setItem('stats', JSON.stringify(totalPoints))

    toggleClicked(true)
  }

  // const submitAchieve = async (e) => {
  //   e.preventDefault()
  //   let achievement = {}
  // }

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
      <div className="Stats">
        <Stats
          achievement={achievement}
          setTitle={setTitle}
          setType={setType}
          storePoints={storePoints}
        />
      </div>
    </div>
  )
}

export default Character

// Create a Post for Achievements
