import Character from './Character'

const Game = ({ payload, charName, avatar }) => {
  return (
    <div className="Game">
      <Character charName={charName} avatar={avatar} />
    </div>
  )
}

export default Game
