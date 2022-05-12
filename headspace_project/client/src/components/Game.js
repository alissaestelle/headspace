import Character from './Character'

const Game = ({ charName, avatar }) => {
  return (
    <div className="Game">
      <Character charName={charName} avatar={avatar} />
    </div>
  )
}

export default Game
