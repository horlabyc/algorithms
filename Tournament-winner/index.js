function tournamentWinner(competitions, results) {
  let leaderBoard = { score: 0, team: ''}
  let resultBoard = {}
  for (let i = 0; i < competitions.length; i++){
    const winnerIndex = results[i] === 1 ? 0 : 1
    const winner = competitions[i][winnerIndex]
    if (winner in resultBoard) {
      resultBoard[winner] += 3
    }else {
      resultBoard[winner] = 3 
    }

    if (leaderBoard.score < resultBoard[winner]) {
      leaderBoard.team = winner
      leaderBoard.score = resultBoard[winner]
    }

  }
  return leaderBoard.team
}

const competitions = [
  ["HTML", "C#"],
  ['C#', 'Python'],
  ['Python', 'HTML'],
  ['Python', 'Java'],
  ['C#', 'Java'],
  ['Java', 'HTML']
]
const results = [0, 0, 1, 0, 0, 1]

console.log(tournamentWinner(competitions, results))