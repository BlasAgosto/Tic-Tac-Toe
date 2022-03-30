'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./books/event.js')

// const movieEvents = require('./movies/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // attach event listeners
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('.col-4').on('click', function () {
    const stampyBoi = nameless()
    $(this).data('value', stampyBoi)
    $(this).text(stampyBoi)
  })

  $('.col-4').on('click', function () { const value = $(this).data('value'); console.log(value) })

  const currentPlayer = ['x', 'o']
  function nameless () {
    currentPlayer.push(currentPlayer.shift())
    return currentPlayer[0]
  }

  function isWeener () {
    const weeners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    // for (const combination of winningCombinations) {
    //   const [a, b, c] = combination

    //   if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
    //     return combination
    //   }
    // }
  }
  // const element = document.getElementById('zero')
  // document.getElementById('#zero')
  // document.getElementById('currentPlayer').innerHTML = currentPlayer[]
})
