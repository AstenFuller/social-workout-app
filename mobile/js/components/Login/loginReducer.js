const defaultState = {
  loginEmail: '',
  loginPassword: '',
  token: '',
  userId: ''
}

export default function LoginReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
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

    case 'HANDLE_LOGIN_SUBMIT_FULFILLED': {
      return {
        ...state,
        token: payload.data.id,
        userId: payload.data.userId
      }
    }

    default: {
      return state;
    }
  }  
}
