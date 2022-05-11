import FemaleChar from './FemaleChar'

const Game = ({ character1, setCharacter1 }) => {
  return (
    <div className="Game">
      <FemaleChar character={character1} setCharacter={setCharacter1} />
    </div>
  )
}

export default Game
