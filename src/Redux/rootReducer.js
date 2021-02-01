const initialState = {
  user: {
    isAuth: false,
    login: 'undefined',
    status: `I'm superman`,
  }
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case "LOGIN":
      return {
        user: {
          isAuth: true,
          login: action.login,
          status: `I'm supreman`,
        }
      }
    case "REGISTRATION":
      return {
        user: {
          isAuth: true,
          login: action.login,
          status: action.status
        }
      }
    default:
      return state
  }
}

export default rootReducer