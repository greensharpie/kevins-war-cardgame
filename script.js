// Variables
let playerTurn = []
let computerTurn = []
let playerScore = 26
let computerScore = 26
const dButton = document.getElementById('drawButton')
const pCards = document.getElementById('playerCards')
const compCards = document.getElementById('computerCards')
const pScores = document.getElementById('playerScore')
const compScore = document.getElementById('computerScore')

let playerCard = 0
let computerCard = 0

//Functions for Game Logic
function randomCards() {
  const playerCard = Math.floor(Math.random() * 14 + 2)
  playerTurn.push(playerCard)

  let playerHighCards = ''
  if (playerCard === 11) {
    playerHighCards = 'J'
  } else if (playerCard === 12) {
    playerHighCards = 'Q'
  } else if (playerCard === 13) {
    playerHighCards = 'K'
  } else if (playerCard === 14) {
    playerHighCards = 'A'
  } else {
    playerHighCards = playerCard
  }

  pCards.innerText = playerHighCards

  const computerCard = Math.floor(Math.random() * 14 + 2)
  computerTurn.push(computerCard)

  let computerHighCards = ''
  if (computerCard === 11) {
    computerHighCards = 'J'
  } else if (computerCard === 12) {
    computerHighCards = 'Q'
  } else if (computerCard === 13) {
    computerHighCards = 'K'
  } else if (computerCard === 14) {
    computerHighCards = 'A'
  } else {
    computerHighCards = computerCard
  }
  compCards.innerText = computerHighCards

  scoreCheck()
}

//scores

// if (playerCard === computerCard) {
//   war()
// } else
function scoreCheck() {
  console.log('playerTurn', playerTurn)
  console.log('computerTurn', computerTurn)
  if (playerTurn.at(-1) > computerTurn.at(-1)) {
    playerScore++
    computerScore--
    console.log('player wins')
  } else if (computerTurn.at(-1) > playerTurn.at(-1)) {
    computerScore++
    playerScore--
    console.log('computer wins')
  }

  // console.log(playerScore)
  // console.log(computerScore)
  pScores.innerText = playerScore
  compScore.innerText = computerScore
}
// function war() {
//   if (playerTurn === computerTrun) {
//     war()
//   } else if (playerTurn > computerTurn) {
//     playerScore = playerScore + 4
//     computerScore = computerScore - 4
//   } else if (computerTurn > playerTurn) {
//     computerScore = computerScore + 4
//     playerScore = playerScore - 4
//   }
// }
console.log('playerScore->', playerScore)
console.log('computerScore->', computerScore)
//Event Listeners
dButton.addEventListener('click', randomCards)
