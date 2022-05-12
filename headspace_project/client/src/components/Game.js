import Character from './Character'

const Game = ({ payload }) => {
  return (
    <div className="Game">
      <Character payload={payload} />
    </div>
  )
}

export default Game
