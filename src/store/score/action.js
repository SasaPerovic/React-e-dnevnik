import { actionType } from '@/store/actionType'
import { apiGet, apiPost } from '@/services/api'


export const getScores = () => (dispatch) => {
  dispatch({
    type: `${actionType.SCORE_GET}`,
    payload: apiGet('ocene')
  })
}
export const scorePost = variable => dispatch => new Promise((resolve, reject) => {
  apiPost('oceni', variable).then((data) => {
    resolve(data)
    dispatch({
      type: `${actionType.SCORE_POST}_FULFILLED`,
      payload: {
        data: data.data,
        status: data.status,
      },
    })
  }).catch((error) => {
    reject(error.response)
    dispatch({
      type: `${actionType.SCORE_POST}_REJECTED`,
      payload: {
        error: error.response.data.error,
      },
    })
  })
})
