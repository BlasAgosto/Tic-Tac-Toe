'use strict'

const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>User signed up successfully</p>')
  $('#auth-display').fadeOut(9000)

  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
  $('#auth-display').fadeOut(9000)
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>User signed in successfully</p>')
  $('#auth-display').fadeOut(9000)

  // reset all forms
  $('form').trigger('reset')

  console.log(response)
  // store data from the response in my store object
  store.user = response.user

  // reset single form
  // $('#sign-in-form').trigger('reset')
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Error while signing in</p>')
  $('#auth-display').fadeOut(9000)
}

const onChangePasswordSuccess = function () {
  $('#auth-display').html('<p>User changed password successfully</p>')
  $('#auth-display').fadeOut(9000)

  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#auth-display').fadeOut(9000)
  $('#auth-display').html('<p>Error while changing password</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').fadeOut(9000)
  $('#auth-display').html('<p>User signed out successfully</p>')

  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  $('#auth-display').fadeOut(9000)
  $('#auth-display').html('<p>Error while signing out</p>')
}

const onCreateGameSuccess = function (response) {
  $('#auth-display').fadeOut(9000)
  $('#auth-display').html('<p>New Game! Do better this time....really</p>')
  store.game = response.game
}

const onCreateGameFailure = function () {
  $('#auth-display').fadeOut(9000)
  $('#auth-display').html('<p>Hue hue hue, imagine not being able to make a new game. Hue hue hue </p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateGameSuccess,
  onCreateGameFailure
}
