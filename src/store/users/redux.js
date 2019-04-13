import { actionType } from '@/store/actionType'

const initalState = {
  user: null,
  users: [],
}

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case `${actionType.GET_USER}_FULFILLED`: {
      const { user } = action.payload.data
      return {
        ...state,
        user,
      }
    }
    case `${actionType.GET_USERS}_FULFILLED`: {
      const { data } = action.payload
      return {
        ...state,
        users: data,
      }
    }
    case `${actionType.LOGIN}_FULFILLED`: {
      const {
        data: {
          token,
          user,
        },
      } = action.payload
      return {
        ...state,
        user: {
          token,
          ...user,
        },
      }
    }
    case actionType.LOGOUT_USER: {
      return {
        ...state,
        user: null,
      }
    }
    case actionType.DELETE_USER: {
      return {
        ...state,
        users: action.payload,
      }
    }
    case actionType.UPDATE_USER: {
      return {
        ...state,
        users: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
