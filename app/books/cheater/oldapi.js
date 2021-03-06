'use strict'

const store = require('../store.js')

const signUp = function (data) {
  console.log(store)
  return $.ajax({
    method: 'POST',
    url: 'https://library-express-api.herokuapp.com/sign-up',
    data
    // same as data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://library-express-api.herokuapp.com/sign-in',
    data
    // same as data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://library-express-api.herokuapp.com/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
    // same as data: data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'https://library-express-api.herokuapp.com/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
