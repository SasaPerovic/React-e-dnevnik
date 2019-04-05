import { actionType } from '@/store/actionType'

const initalState = {
  user: null,
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
    default: {
      return state
    }
  }
}
