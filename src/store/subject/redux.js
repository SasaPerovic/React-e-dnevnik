/* eslint-disable */
import { actionType } from '@/store/actionType'

const initalState = {
  subject: [],
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
    default: {
      return state
    }
  }
}
