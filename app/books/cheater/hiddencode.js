// this is the functioning code that I shouldn't have messed with.

'use strict'

const bootstrap = require('bootstrap')
const addNestedValue = require('../lib/add-nested-value.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./books/event.js')
const pain = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
// const convoluted = ['0a', '1b', '2c', '3d', '4e', '5f', '6g', '7h', '8i']
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
    const clickyBoi = $(this).attr('id')
    // console.log(stampyBoi + "hue")

    pain[clickyBoi] = stampyBoi
    console.log(pain)

    $(this).text(stampyBoi)
    // if (pain[0] === 'x') {
    //   console.log('without love')
    // }
    // const notWinner = currentPlayer[1]
    wheener()
    stuffed(clickyBoi)
    SHAMEFUL()
  })

  $('.col-4').on('click', function () {
    const value = $(this).data('value')
    console.log(value)
  })

  const currentPlayer = ['o', 'x']
  function nameless () {
    currentPlayer.push(currentPlayer.shift())
    return currentPlayer[0]
  }
})
function stuffed (id) {
  // if (pain[7] === 'x' || pain[7] === 'o') {
  // console.log(id)
  $(`#${id}`).off()
  // $('#' + id).off()
  // $('#7').off()
  // }
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
  // else { console.log('how are you this bad!? You tied! <br> CAT GAME!') }
}
// const leNumber = Number()

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
  element.style.display = 'none'
}

function line () {
  const element = document.getElementById('hiddenloser')
  element.style.display = 'block'
}

function dumb () {
  const element = document.getElementById('hiddenhweener')
  element.style.display = 'block'
}
function dumber (i) {
  const element = document.getElementById('board')
  element.style.display = 'none'
  const win = document.getElementById('identifyYourself')
  win.textContent += pain[i]
  const lose = document.getElementById('loser')
  lose.textContent = pain[i]
}
// When the wheener function is activated, insert text(stampyBoi) in Divid identifyYourself
// const para = document.getElementById('identifyYourself')
// para.textContent += pain[7]
// function leHide () {
//   const element = document.getElementById('0')
//   element.style.display = 'none'
// }
// create a gameboard, set values += curent player

// if ($('#zero').value === 'o') {
//   console.log('yar!')
// }
// function displayResult () {
// if
// (document.getElementById('zero').innerHTML = 'lol') { console.log('yolo') }
// }
// if ($('zero').attr() = 'x') {
//   console.log('yolo')
// }
// if value is = on 0,1,2 we have a winner

// if ($('zero') === 'x') {
//   console.log('yolo')
// }

// })
// if($('id').val() == Reset)

// console.log($('#zero'))

// if (document.getElementById('zero').innerHTML === 'x') {
// console.log('uh-yup')
// }
// if (value )
// const myEle = document.getElementById('zero')
// if (myEle === 'null') {
//   const myEleValue = myEle.value
//   console.log(myEleValue + 'yey')
// }
// console.log(this.data('value')
