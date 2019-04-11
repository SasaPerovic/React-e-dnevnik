const initalState = {
  notification: null,
}

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case 'showNotification': {
      return {
        ...state,
        notification: action.payload,
      }
    }
    case 'clearNotification': {
      return {
        ...state,
        notification: null,
      }
    }
    default: {
      return state
    }
  }
}
