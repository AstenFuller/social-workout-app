import axios from 'axios';
import { HOST } from 'react-native-dotenv';
import { Actions } from 'react-native-router-flux';

export function handleUsername(username) {
  return {
      type: 'HANDLE_USERNAME',
      payload: { username }
  }
}

export function handleLoginEmail(email) {
    return {
        type: 'HANDLE_LOGIN_EMAIL',
        payload: { email }
    }
}

export function handleLoginPassword(password) {
    return {
        type: 'HANDLE_LOGIN_PASSWORD',
        payload: { password }
    }
}
export function handleConfirmedLoginPassword(confirmedPassword) {
    return {
        type: 'HANDLE_CONFIRMED_LOGIN_PASSWORD',
        payload: { confirmedPassword }
    }
}
export function handleLoginSubmit(username, email, password, confirmedPassword) {
  return dispatch => {
      return dispatch({
          type: 'HANDLE_CREATE_USER_SUBMIT',
          payload: axios.post(`${HOST}/api/Users/login`, {
              username: username.toLowerCase(),
              email: email.toLowerCase(),
              password: password,
              confirmedPassword: confirmedPassword
          })
          .then(res => {
              Actions.landingPage()
              return res.data.id
          })
          .catch(err => alert('Login attempt failed. Wrong username or password.'))
      })
  }
}