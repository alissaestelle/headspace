import Character from './Character'

const Game = ({ charName, avatar, achievements, setAchievements }) => {
  return (
    <div className="Game">
      <Character
        charName={charName}
        avatar={avatar}
        achievements={achievements}
        setAchievements={setAchievements}
      />
    </div>
  )
}

export default Game
