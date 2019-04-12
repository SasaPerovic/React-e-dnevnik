/* eslint-disable */
import { actionType } from '@/store/actionType'

const initalState = {
  subject: [],
  listen: [],
  score: null,
}

export default function reducer(state = initalState, action){
  switch (action.type) {
    case `${actionType.GET_SUBJECT}_FULFILLED`: {
      const { data } = action.payload
      return {
        ...state,
        subject: data,
      }
    }
    case `${actionType.GET_LISTEN}_FULFILLED`: {
      const { data } = action.payload
      return {
        ...state,
        listen: data,
      }
    }
    default: {
      return state
    }
  }
}
