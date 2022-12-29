def tournamentWinner(competitions, results):
  leaderBoard = {
    "score": 0,
    "team": '' 
  }
  resultBoard = {}
  for i in range(0, len(competitions)):
    winnerIndex = 0 if results[i] == 1 else 1
    winner = competitions[i][winnerIndex]
    if winner in resultBoard:
      resultBoard[winner] += 3
    else:
      resultBoard[winner] = 3

    if leaderBoard["score"] < resultBoard[winner]:
      leaderBoard["team"] = winner
      leaderBoard["score"] = resultBoard[winner]
  
  return leaderBoard["team"]

competitions = [
  ["HTML", "C#"],
  ['C#', 'Python'],
  ['Python', 'HTML'],
  ['Python', 'Java'],
  ['C#', 'Java'],
  ['Java', 'HTML']
]
results = [0, 0, 1, 0, 0, 1]

print(tournamentWinner(competitions, results))