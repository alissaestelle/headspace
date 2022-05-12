const Character = ({ payload }) => {
  return (
    <div className="User-Char-Grid">
      <div>
        <h2>{payload.character.name}</h2>
      </div>
      <div className="User-Char">
        <img src={payload.character.avatar} alt={payload.character.name} />
      </div>
    </div>
  )
}

export default Character
