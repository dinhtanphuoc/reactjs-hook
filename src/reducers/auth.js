let initialState = {
  user: {
    token: '123456789'
  }
}

export default function auth(state = initialState, action) {
  switch(action) {
    case 'DEMO':
      return {
        ...state,
        auth: {
          token: action.payload
        }
      }

    default:
  }
}
