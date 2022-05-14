import { useState, useEffect } from 'react'
import { GetAchievements } from '../services/Requests'
import Achievement from './Achievement'

const Character = ({
  payload,
  charName,
  avatar,
  stats,
  setStats,
  level,
  achieveArr,
  setAchieve,
  points,
  setPoints,
  updates,
  setUpdates
}) => {
  // let [updates, setUpdates] = useState(achievements)
  // let [achievement, toggleAchievement] = useState(false)

  // useEffect(() => {
  //   const getAchievements = async () => {
  //     let results = await GetAchievements()
  //     setAchieve(results)
  //     console.log(results)
  //     localStorage.getItem('status')
  //   }
  //   getAchievements()
  // }, [])

  // useEffect(() => {
  //   let test = localStorage.getItem('newArr')
  //   setAchieve(test)
  // }, [achieveArr])

  const testWin = (idx) => {
    let element = achieveArr.shift()
    console.log(element)
    let newArr = achieveArr.filter((elem, idx) => {
      return elem !== idx
    })
    setAchieve(newArr)
    localStorage.setItem('newArr', JSON.stringify(newArr))
    console.log(newArr)
    // getUpdates()
  }

  return (
    <div className="Character">
      <div className="User-Char-Grid">
        <h2 id="User-Char-Name">{charName}</h2>
        <img id="User-Char-Img" src={avatar} alt={charName} />
        <h2 id="User-Char-Level">Level: {level}</h2>
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
              testWin={() => testWin(idx)}
            />
          )
      )}
    </div>
  )
}

export default Character

// Create a Post for Achievements
