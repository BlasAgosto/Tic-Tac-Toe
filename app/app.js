'use strict'

const bootstrap = require('bootstrap')
const addNestedValue = require('../lib/add-nested-value.js')
const { updateGame } = require('./books/api.js')
const authEvents = require('./books/event.js')
let gameBoard = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
let gameOver = false

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#reset').on('click', authEvents.createGame)
  $('#reset').on('click', function () {
    console.log('muah')
    gameBoard = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
    $('.col-4').html('Click Me To Place Your Piece')
    $('.col-4').on('click', onClick)
    refreshGame()
  })

  function onClick () {
    const playerValue = choosePlayer()

    $(this).data('value', playerValue)
    const boardValue = $(this).attr('id')

    gameBoard[boardValue] = playerValue
    console.log(gameBoard)

    $(this).text(playerValue)
    winConditions()
    // fillBoard(boardValue)
    tieCondition()
    updateGame(boardValue, playerValue, gameOver)
      .then(response => console.log(response))
  }
  // $('.col-4').on('click', onClick)

  // $('.col-4').on('click', function () {
  //   const value = $(this).data('value')
  //   console.log(value)
  // })

  const currentPlayer = ['x', 'o']
  function choosePlayer () {
    currentPlayer.push(currentPlayer.shift())
    return currentPlayer[0]
  }

  // function fillBoard (id) {
  //   $(`#${id}`).off()
  // }
  function winConditions () {
    if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
      freezeBoard(winText(0))
    }
    if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
      freezeBoard(winText(3))
    }
    if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
      freezeBoard(winText(6))
    }
    if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
      freezeBoard(winText(0))
    }
    if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
      freezeBoard(winText(1))
    }
    if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
      freezeBoard(winText(2))
    }
    if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
      freezeBoard(winText(0))
    }
    if (gameBoard[6] === gameBoard[4] && gameBoard[6] === gameBoard[2]) {
      freezeBoard(winText(6))
    }
  }

  function tieCondition () {
    if (
      gameBoard[0] != 0 &&
			gameBoard[1] != 1 &&
			gameBoard[2] != 2 &&
			gameBoard[3] != 3 &&
			gameBoard[4] != 4 &&
			gameBoard[5] != 5 &&
			gameBoard[6] != 6 &&
			gameBoard[7] != 7 &&
			gameBoard[8] != 8
    ) {
      showGameBoard(tieText())
    }
  }

  function showGameBoard () {
    const element = document.getElementById('gameBoard')
    element.style.display = 'block'
  }

  function tieText () {
    const element = document.getElementById('tie')
    element.style.display = 'block'
    newButton()
  }

  function freezeBoard () {
    const element = document.getElementById('win')
    element.style.display = 'block'
    $('.col-4').off()
    gameOver = true
  }
  function winText (i) {
    const element = document.getElementById('gameBoard')
    element.style.display = 'block'
    const win = document.getElementById('identifyYourself')
    win.textContent = gameBoard[i]
    const lose = document.getElementById('loser')
    lose.textContent = currentPlayer[1]
    newButton()
  }

  function refreshGame () {
    const element = document.getElementById('gameBoard')
    element.style.display = 'block'
    const elementOne = document.getElementById('win')
    elementOne.style.display = 'none'
    const elementTwo = document.getElementById('tie')
    elementTwo.style.display = 'none'
    choosePlayer()
    // $('.col-4').on()
    gameOver = false
    const elementThree = document.getElementById('reset')
    elementThree.style.display = 'none'
  }

  function newButton () {
    const elementThree = document.getElementById('reset')
    elementThree.style.display = 'block'
  }
})
