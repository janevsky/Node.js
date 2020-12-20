module.exports = {
  filterByName: (players, name) => {
    return players.filter(player => player.name != name)
  },
  filterByGoalsScored: (players, goalsScores) => {
    return players.filter(player => player.goalsScored >= goalsScores)
  }
}

// identicno so:
// function filterByName(players, name) {
//   return players.filter(player => player.name != 'Boban')
// }