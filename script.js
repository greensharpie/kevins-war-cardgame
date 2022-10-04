// Variables
let playerTurn = []
let computerTurn = []
let userScore = 26
let computerScore = 26
const dButton = document.getElementById('drawButton')

//Functions for Game Logic
function randomCards() {
  const playerCard = Math.floor(Math.random() * 14 + 2)
  playerTurn.push(playerCard)
  console.log(playerTurn)

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
  console.log(computerTurn)
}

//Event Listeners
dButton.addEventListener('click', randomCards)
