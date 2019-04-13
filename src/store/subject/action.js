/* eslint-disable */
import { apiGet, apiPost } from '@/services/api'
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

export function getOcene(variable) {
  return {
    type: `${actionType.SCORE_GET}`,
    payload: apiGet(`predmet/ocene/${variable.id}`),
  }
}

/* eslint-disable */
export const setOcene = variable => (dispatch, state) => new Promise((resolve, reject) => {
  const { score } = state().store.dnevnik

  const mutableScore = {
    ...score,
    ocene: [
      ...score.ocene,
      variable.ocena,
    ]
  }

  apiPost('oceni', variable).then((data) => {
    dispatch({
      type: `${actionType.SCORE_POST}`,
      payload: mutableScore
    })
    resolve(data)
  }).catch((error) => {
    reject(error)
  })
})
