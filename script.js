// Variables
let playerTurn = []
let computerTurn = []
let warArrayP = []
let warArrayC = []
let playerScore = 26
let computerScore = 26
const dButton = document.getElementById('drawButton')
const playButton = document.getElementById('playButton')
const pCards = document.getElementById('playerCards')
const compCards = document.getElementById('computerCards')
const pScores = document.getElementById('playerScore')
const compScore = document.getElementById('computerScore')
const pCardPic = document.getElementById('playerCard')
const cCardPic = document.getElementById('computerCard')
let playerCard = 0
let computerCard = 0
//
const cardTwo = [
  'PNG-cards-1.3/2_of_clubs.png',
  'PNG-cards-1.3/2_of_diamonds.png',
  'PNG-cards-1.3/2_of_hearts.png',
  'PNG-cards-1.3/2_of_spades.png'
]
const cardThree = [
  'PNG-cards-1.3/3_of_clubs.png',
  'PNG-cards-1.3/3_of_diamonds.png',
  'PNG-cards-1.3/3_of_hearts.png',
  'PNG-cards-1.3/3_of_spades.png'
]
const cardFour = [
  'PNG-cards-1.3/4_of_clubs.png',
  'PNG-cards-1.3/4_of_diamonds.png',
  'PNG-cards-1.3/4_of_hearts.png',
  'PNG-cards-1.3/4_of_spades.png'
]
const cardFive = [
  'PNG-cards-1.3/5_of_clubs.png',
  'PNG-cards-1.3/5_of_diamonds.png',
  'PNG-cards-1.3/5_of_hearts.png',
  'PNG-cards-1.3/5_of_spades.png'
]
const cardSix = [
  'PNG-cards-1.3/6_of_clubs.png',
  'PNG-cards-1.3/6_of_diamonds.png',
  'PNG-cards-1.3/6_of_hearts.png',
  'PNG-cards-1.3/6_of_spades.png'
]
const cardSeven = [
  'PNG-cards-1.3/7_of_clubs.png',
  'PNG-cards-1.3/7_of_diamonds.png',
  'PNG-cards-1.3/7_of_hearts.png',
  'PNG-cards-1.3/7_of_spades.png'
]
const cardEight = [
  'PNG-cards-1.3/8_of_clubs.png',
  'PNG-cards-1.3/8_of_diamonds.png',
  'PNG-cards-1.3/8_of_hearts.png',
  'PNG-cards-1.3/8_of_spades.png'
]
const cardNine = [
  'PNG-cards-1.3/9_of_clubs.png',
  'PNG-cards-1.3/9_of_diamonds.png',
  'PNG-cards-1.3/9_of_hearts.png',
  'PNG-cards-1.3/9_of_spades.png'
]
const cardTen = [
  'PNG-cards-1.3/10_of_clubs.png',
  'PNG-cards-1.3/10_of_diamonds.png',
  'PNG-cards-1.3/10_of_hearts.png',
  'PNG-cards-1.3/10_of_spades.png'
]
const cardJack = [
  'PNG-cards-1.3/jack_of_clubs2.png',
  'PNG-cards-1.3/jack_of_diamonds2.png',
  'PNG-cards-1.3/jack_of_hearts2.png',
  'PNG-cards-1.3/jack_of_spades2.png'
]
const cardQueen = [
  'PNG-cards-1.3/queen_of_clubs2.png',
  'PNG-cards-1.3/queen_of_diamonds2.png',
  'PNG-cards-1.3/queen_of_hearts2.png',
  'PNG-cards-1.3/queen_of_spades2.png'
]
const cardKing = [
  'PNG-cards-1.3/king_of_clubs2.png',
  'PNG-cards-1.3/king_of_diamonds2.png',
  'PNG-cards-1.3/king_of_hearts2.png',
  'PNG-cards-1.3/king_of_spades2.png'
]
//

function warGame() {
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
    //
    switch (playerCard) {
      case 2:
        pCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/2_of_clubs.png">`
        break
      case 3:
        pCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/3_of_clubs.png">`
        break
      case 4:
        pCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/4_of_clubs.png">`
        break
      case 5:
        pCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/5_of_clubs.png">`
        break
      case 6:
        pCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/6_of_clubs.png">`
        break
      case 7:
        pCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/7_of_clubs.png">`
        break
      case 8:
        pCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/8_of_clubs.png">`
        break
      case 9:
        pCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/9_of_clubs.png">`
        break
      case 10:
        pCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/10_of_clubs.png">`
        break
      case 11:
        pCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/jack_of_clubs.png">`
        break
      case 12:
        pCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/queen_of_clubs.png">`
        break
      case 13:
        pCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/king_of_clubs.png">`
        break
      case 14:
        pCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/ace_of_clubs.png">`
        break
    }

    //

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
    //
    switch (computerCard) {
      case 2:
        cCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/2_of_clubs.png">`
        break
      case 3:
        cCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/3_of_clubs.png">`
        break
      case 4:
        cCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/4_of_clubs.png">`
        break
      case 5:
        cCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/5_of_clubs.png">`
        break
      case 6:
        cCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/6_of_clubs.png">`
        break
      case 7:
        cCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/7_of_clubs.png">`
        break
      case 8:
        cCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/8_of_clubs.png">`
        break
      case 9:
        cCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/9_of_clubs.png">`
        break
      case 10:
        cCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/10_of_clubs.png">`
        break
      case 11:
        cCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/jack_of_clubs.png">`
        break
      case 12:
        cCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/queen_of_clubs.png">`
        break
      case 13:
        cCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/king_of_clubs.png">`
        break
      case 14:
        cCardPic.innerHTML = `<img width="200" height="300" src="PNG-cards-1.3/ace_of_clubs.png">`
        break
    }
    //

    scoreCheck()
  }

  //scores
  function scoreCheck() {
    if (playerTurn.at(-1) === computerTurn.at(-1)) {
      war()
    } else if (playerScore <= 0) {
      alert('Computer Wins!')
      dButton.disabled = true
      pScores.innerText = `Player Score: 0`
    } else if (computerScore <= 0) {
      alert('Player Wins!')
      dButton.disabled = true
      compScore.innerText = `Computer Score: 0`
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
    for (let i = 0; i <= 2; i++) {
      const playerWar = Math.floor(Math.random() * 14 + 2)
      warArrayP.push(playerWar)
    }
    for (let i = 0; i <= 2; i++) {
      const computerWar = Math.floor(Math.random() * 14 + 2)
      warArrayC.push(computerWar)
    }
    if (warArrayP[0] > warArrayC[0]) {
      playerScore += 4
      computerScore -= 4
    } else if (warArrayC[0] > warArrayP[0]) {
      computerScore += 4
      playerScore -= 4
    } else if (warArrayP[0] === warArrayC[0]) {
      if (warArrayP[0] === warArrayC[0]) {
        warArrayP[1] > warArrayC[1]
        playerScore += 4
        computerScore -= 4
      } else if (warArrayP[1] === warArrayC[1]) {
        warArrayP[2] > warArrayC[2]
        playerScore += 4
        computerScore -= 4
      } else if (warArrayC[1] > warArrayP[1]) {
        computerScore += 4
        playerScore -= 4
      } else if (warArrayC[2] > warArrayP[2]) {
        computerScore += 4
        playerScore -= 4
      }
    }
  }
  //Event Listeners
  dButton.addEventListener('click', randomCards)
}
warGame()

playButton.addEventListener('click', () => {
  window.location.href = 'war.html'
})
