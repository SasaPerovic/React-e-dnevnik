/* eslint-disable */
import { apiPost } from '@/services/api'

import { actionType } from '@/store/actionType'

export const loginUser = (variable) => dispatch => new Promise((resolve, reject) => {

  apiPost('login', variable).then((data) => {
    resolve(data)
    dispatch({
      type: `${actionType.LOGIN}_FULFILLED`,
      payload: {
        data: data.data,
        status: data.status,
      },
    })
  }).catch((error) => {
    reject(error)
    dispatch({
      type: `${actionType.LOGIN}_REJECTED`,
      payload: {
        error: error.response.data.error
      },
    })
  })

})
