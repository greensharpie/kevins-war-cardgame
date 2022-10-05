// Variables
let playerTurn = []
let computerTurn = []
let warArrayP = []
let warArrayC = []
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

  pCards.innerText = `Player Card: ${playerHighCards}`

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
  compCards.innerText = `Computer Card: ${computerHighCards}`

  scoreCheck()
}

//scores
function scoreCheck() {
  if (playerTurn.at(-1) === computerTurn.at(-1)) {
    //war()
  } else if (playerScore <= 0) {
    console.log('computer wins')
    alert('Computer Wins!')
    dButton.disabled = true
  } else if (computerScore <= 0) {
    console.log('player wins')
    alert('Player Wins!')
    dButton.disabled = true
  } else if (playerTurn.at(-1) > computerTurn.at(-1)) {
    playerScore++
    computerScore--
  } else if (computerTurn.at(-1) > playerTurn.at(-1)) {
    computerScore++
    playerScore--
  }

  pScores.innerText = `Player Score: ${playerScore}`
  compScore.innerText = `Computer Score: ${computerScore}`
}

function war() {
  console.log('loop initiated')
  for (let i = 0; i <= 2; i++) {
    const playerWar = Math.floor(Math.random() * 14 + 2)
    warArrayP.push(playerWar)
  }
  for (let i = 0; i <= 2; i++) {
    const computerWar = Math.floor(Math.random() * 14 + 2)
    warArrayC.push(computerWar)
  }
}
// war()

//Event Listeners
dButton.addEventListener('click', randomCards)
