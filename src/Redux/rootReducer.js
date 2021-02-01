const initialState = {
  user: {
    isAuth: false,
    login: 'matskovskiy_777',
    room: '',
    status: `I'm superman`,
  }
}

const defaultStateStatus = `I'm superman`;
const defaultStateRoom = '';

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case "LOGIN":
      return {
        user: {
          isAuth: true,
          login: action.login,
          status: defaultStateStatus,
          room: defaultStateRoom,
        }
      }
  }

  return state
}

export default rootReducer