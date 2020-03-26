const defaultState = {
  username: '',
  loginEmail: '',
  loginPassword: '',
  confirmedLoginPassword: '',
  token: ''
}

export default function LoginRegisterReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'HANDLE_USERNAME': {
      return {
        ...state,
        loginEmail: payload.username.toLowerCase()
      }
    }
    case 'HANDLE_LOGIN_EMAIL': {
      return {
        ...state,
        loginEmail: payload.email.toLowerCase()
      }
    }

    case 'HANDLE_LOGIN_PASSWORD': {
      return {
        ...state,
        loginPassword: payload.password
      }
    }
    case 'HANDLE_CONFIRMED_LOGIN_PASSWORD': {
      return {
        ...state,
        confirmedLoginPassword: payload.confirmedPassword
      }
    }

    case 'HANDLE_CREATE_USER_SUBMIT_FULFILLED': {
      return {
        ...state,
        token: payload
      }
    }

    default: {
      return state;
    }
  }  
}