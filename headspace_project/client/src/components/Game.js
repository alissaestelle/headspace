import Character from './Character'

const Game = ({
  charName,
  avatar,
  level,
  stats,
  setStats,
  achievements,
  setAchieve,
  points,
  setPoints
}) => {
  return (
    <div className="Game">
      <Character
        charName={charName}
        avatar={avatar}
        level={level}
        stats={stats}
        setStats={setStats}
        achievements={achievements}
        setAchieve={setAchieve}
        points={points}
        setPoints={setPoints}
      />
    </div>
  )
}

export default Game
