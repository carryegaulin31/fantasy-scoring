function calculateScore(player) {
  switch (player.position) {
    case 'QB':
      return (player.stats.rushing.yards / 10 +
        player.stats.passing.yards / 25 +
        player.stats.passing.touchdowns * 6 +
        player.stats.rushing.touchdowns * 6)

    case 'RB':
      return (player.stats.receiving.receptions +
        player.stats.rushing.yards / 10 +
        player.stats.receiving.yards / 10 +
        player.stats.rushing.touchdowns * 6)

    case 'WR':
      return (player.stats.receiving.receptions +
        player.stats.receiving.yards / 10 +
        player.stats.return.kickreturn.yards / 15 +
        player.stats.return.puntreturn.yards / 15 +
        player.stats.receiving.touchdowns * 6 +
        player.stats.return.puntreturn.touchdowns * 6 +
        player.stats.return.kickreturn.fumbles * -3)

    case 'TE':
      return (player.stats.receiving.receptions +
        player.stats.receiving.yards / 10 +
        player.stats.receiving.touchdowns * 6)

    default:
      return (0)
  }
}
module.exports = calculateScore
