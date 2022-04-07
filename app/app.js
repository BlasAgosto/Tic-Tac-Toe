'use strict'

const bootstrap = require('bootstrap')
const addNestedValue = require('../lib/add-nested-value.js')
const authEvents = require('./books/event.js')
let pain = ['0', '1', '2', '3', '4', '5', '6', '7', '8']

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#reset').on('click', function () {
    console.log('muah')
    pain = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
    $('.col-4').html('Stuff me Senpai 2')
    $('.col-4').on('click', onClick)
    terrible()
  })

  function onClick () {
    const stampyBoi = nameless()

    $(this).data('value', stampyBoi)
    const clickyBoi = $(this).attr('id')

    pain[clickyBoi] = stampyBoi
    console.log(pain)

    $(this).text(stampyBoi)
    wheener()
    stuffed(clickyBoi)
    SHAMEFUL()
  }
  $('.col-4').on('click', onClick)

  // $('.col-4').on('click', function () {
  //   const value = $(this).data('value')
  //   console.log(value)
  // })

  const currentPlayer = ['o', 'x']
  function nameless () {
    currentPlayer.push(currentPlayer.shift())
    return currentPlayer[0]
  }

  function stuffed (id) {
    $(`#${id}`).off()
  }
  function wheener () {
    if (pain[0] === pain[1] && pain[0] === pain[2]) {
      dumb(dumber(0))
    }
    if (pain[3] === pain[4] && pain[3] === pain[5]) {
      dumb(dumber(3))
    }
    if (pain[6] === pain[7] && pain[6] === pain[8]) {
      dumb(dumber(6))
    }
    if (pain[0] === pain[3] && pain[0] === pain[6]) {
      dumb(dumber(0))
    }
    if (pain[1] === pain[4] && pain[1] === pain[7]) {
      dumb(dumber(1))
    }
    if (pain[2] === pain[5] && pain[2] === pain[8]) {
      dumb(dumber(2))
    }
    if (pain[0] === pain[4] && pain[0] === pain[8]) {
      dumb(dumber(0))
    }
    if (pain[6] === pain[4] && pain[6] === pain[2]) {
      dumb(dumber(6))
    }
  }

  function SHAMEFUL () {
    if (
      pain[0] != 0 &&
			pain[1] != 1 &&
			pain[2] != 2 &&
			pain[3] != 3 &&
			pain[4] != 4 &&
			pain[5] != 5 &&
			pain[6] != 6 &&
			pain[7] != 7 &&
			pain[8] != 8
    ) {
      blood(line())
    }
  }

  function blood () {
    const element = document.getElementById('board')
    element.style.display = 'block'
  }

  function line () {
    const element = document.getElementById('hiddenloser')
    element.style.display = 'block'
  }

  function dumb () {
    const element = document.getElementById('hiddenhweener')
    element.style.display = 'block'
    $('.col-4').off()
  }
  function dumber (i) {
    const element = document.getElementById('board')
    element.style.display = 'block'
    const win = document.getElementById('identifyYourself')
    win.textContent = pain[i]
    const lose = document.getElementById('loser')
    lose.textContent = currentPlayer[1]
  }

  function terrible () {
    const element = document.getElementById('board')
    element.style.display = 'block'
    const elementOne = document.getElementById('hiddenhweener')
    elementOne.style.display = 'none'
    const elementTwo = document.getElementById('hiddenloser')
    elementTwo.style.display = 'none'
    nameless()
    $('.col-4').on()
  }
})
