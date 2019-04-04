import { actionType } from '@/store/actionType'

const initalState = {
  user: null,
}

export default function reducer(state = initalState, action) {
  switch (action.type) {
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
