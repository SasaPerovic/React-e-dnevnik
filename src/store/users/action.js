import { apiGet, apiPost } from '@/services/api'

import { actionType } from '@/store/actionType'
import { saveAuthCookie, removeAuthCookie } from '@/utils/util'

export const loginUser = variable => dispatch => new Promise((resolve, reject) => {
  apiPost('login', variable).then((data) => {
    const { token } = data.data
    saveAuthCookie({ token })
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
        error: error.response.data.error,
      },
    })
  })
})

export const registerUser = variable => new Promise((resolve, reject) => {
  apiPost('register', variable).then((data) => {
    resolve(data)
  }).catch((error) => {
    reject(error)
  })
})

export const getUser = () => (dispatch) => {
  dispatch({
    type: `${actionType.GET_USER}`,
    payload: apiGet('user'),
  })
}

export const logOutUser = () => (dispatch) => {
  removeAuthCookie()
  dispatch({
    type: actionType.LOGOUT_USER,
    payload: [],
  })
}
