let initialState = {
  user: {
    token: '123456789'
  }
}

export default function auth(state = initialState, action) {
  switch(action) {
    case 'ABC':
      return {
        ...state,
        auth: {
          token: '987654321'
        }
      }

    default:
  }
}