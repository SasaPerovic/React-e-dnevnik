import { apiGet } from '@/services/api'
import { actionType } from '@/store/actionType'

export const getSubject = () => (dispatch) => {
  dispatch({
    type: actionType.GET_SUBJECT,
    payload: apiGet('predaje'),
  })
}

/**
 *
 * @param variable
 *  id
 * @returns {Function}
 */
export const getListen = variable => (dispatch) => {
  const { id } = variable
  if (!id) {
    console.error('id required in getListen action')
  }

  dispatch({
    type: actionType.GET_LISTEN,
    payload: apiGet(`predmet/studenti/${variable.id}`),
  })
}
