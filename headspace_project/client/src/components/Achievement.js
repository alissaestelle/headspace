import { useState } from 'react'

const Achievement = ({ payload, title, type, points, testWin }) => {
  // let [newAchieve, setNewAchieve] = useState({
  //   characterID: payload.character.id,
  //   title: title,
  //   type: type,
  //   points: points
  // })

  return (
    <div className="Achieve-Card" onClick={testWin}>
      <h4>{title}</h4>
      <h3>{points}</h3>
    </div>
  )
}

export default Achievement
