'use strict'

const authUi = require('./ui.js')
const authApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')
// const importBoardFuncs = require('../app.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('signing up')
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('signing in')
  showGameBoard()
  hideSignin()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .signIn(data)
    .then((response) => authUi.onSignInSuccess(response))
    .catch(() => authUi.onSignInFailure())
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .changePassword(data)
    .then(() => authUi.onChangePasswordSuccess())
    .catch(() => authUi.onChangePasswordFailure())
}

const onSignOut = function () {
  showSignin()
  backToSquareOne()
  console.log('trying to sign out')
  authApi
    .signOut()
    .then(() => authUi.onSignOutSuccess())
    .catch(() => authUi.onSignOutFailure())
}

const createGame = function () {
  authApi
    .newGame()
    .then((response) => authUi.onCreateGameSuccess(response))
    .catch(() => authUi.onCreateGameFailure())
}

function showGameBoard () {
  const element = document.getElementById('gameBoard')
  element.style.display = 'block'
  const elementTwo = document.getElementById('reset')
  elementTwo.style.display = 'block'
  const elementThree = document.getElementById('sign-out')
  elementThree.style.display = 'block'
  const elementFour = document.getElementById('sign-out-button')
  elementFour.style.display = 'block'
  const elementFive = document.getElementById('change')
  elementFive.style.display = 'block'
  const elementSix = document.getElementById('change-password-form')
  elementSix.style.display = 'block'
  const elementSeven = document.getElementById('inside')
  elementSeven.style.display = 'block'
}

function hideSignin () {
  const element = document.getElementById('sign-up-form')
  element.style.display = 'none'
  const elementTwo = document.getElementById('signUpH3')
  elementTwo.style.display = 'none'
  const elementThree = document.getElementById('sign-in-form')
  elementThree.style.display = 'none'
  const elementFour = document.getElementById('signInH3')
  elementFour.style.display = 'none'
}

function showSignin () {
  const element = document.getElementById('sign-up-form')
  element.style.display = 'block'
  const elementTwo = document.getElementById('signUpH3')
  elementTwo.style.display = 'block'
  const elementThree = document.getElementById('sign-in-form')
  elementThree.style.display = 'block'
  const elementFour = document.getElementById('signInH3')
  elementFour.style.display = 'block'
}

function backToSquareOne () {
  const element = document.getElementById('gameBoard')
  element.style.display = 'none'
  const elementTwo = document.getElementById('reset')
  elementTwo.style.display = 'none'
  const elementThree = document.getElementById('sign-out')
  elementThree.style.display = 'none'
  const elementFour = document.getElementById('sign-out-button')
  elementFour.style.display = 'none'
  const elementFive = document.getElementById('change')
  elementFive.style.display = 'none'
  const elementSix = document.getElementById('change-password-form')
  elementSix.style.display = 'none'
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  createGame
}
