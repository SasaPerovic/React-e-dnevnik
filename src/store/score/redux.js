/* eslint-disable */
import { actionType } from '@/store/actionType'

const initalState = {
  score: [],
}

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case `${actionType.SCORE_GET}_FULFILLED`: {
      const { data } = action.payload
      return {
        ...state,
        score: data,
      }
    }
    default: {
      return state
    }
  }
}

