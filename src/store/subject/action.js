/* eslint-disable */
import { apiGet, apiPost } from '@/services/api'
import { actionType } from '@/store/actionType'

export const getSubject = () => (dispatch) => {
  dispatch({
    type: `${actionType.GET_SUBJECT}`,
    payload: apiGet('predaje'),
  })
}
