const Character = ({ charName, avatar }) => {
  return (
    <div className="User-Char-Grid">
      <div>
        <h2>{charName}</h2>
      </div>
      <div className="User-Char">
        <img src={avatar} alt={charName} />
      </div>
    </div>
  )
}

export default Character
