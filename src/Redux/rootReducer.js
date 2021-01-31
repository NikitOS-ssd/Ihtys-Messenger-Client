const initialState = {
  user: {
    isAuth: true,
    login: 'matskovskiy_777',
    room: '',
    status: `I'm superman`,
  }
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case "LOGIN":
      return {
        isAuth: true,
        login: action.login
      }
  }

  return state
}

export default rootReducer