import FChar from './FChar'
import MChar from './MChar'

const Game = ({ char1, setChar1, char2, setChar2, femChar }) => {
  return (
    <div className="Game">
      {femChar ? (
        <FChar character={char1} setCharacter={setChar1} />
      ) : (
        <MChar character={char2} setCharacter={setChar2} />
      )}
    </div>
  )
}

export default Game
