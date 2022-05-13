import Character from './Character'

const Game = ({ charName, avatar, level, achievements, setAchievements }) => {
  return (
    <div className="Game">
      <Character
        charName={charName}
        avatar={avatar}
        level={level}
        achievements={achievements}
        setAchievements={setAchievements}
      />
    </div>
  )
}

export default Game
