import Character from './Character'

const Game = ({ charName, avatar, level, achievements, setAchieve }) => {
  return (
    <div className="Game">
      <Character
        charName={charName}
        avatar={avatar}
        level={level}
        achievements={achievements}
        setAchieve={setAchieve}
      />
    </div>
  )
}

export default Game
