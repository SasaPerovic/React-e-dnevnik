import { apiGet, apiPost } from '@/services/api'

import { actionType } from '@/store/actionType'
import { showNotification } from '@/store/notification/action'
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
    reject(error.response)
    dispatch({
      type: `${actionType.LOGIN}_REJECTED`,
      payload: {
        error: error.response.data.error,
      },
    })
  })
})

export const registerUser = variable => dispatch => new Promise((resolve, reject) => {
  apiPost('register', variable).then((data) => {
    resolve(data)
    const message = {
      title: 'Register',
      message: 'Korisnik registrovan',
      type: 'success',
    }
    dispatch(showNotification(message))
    dispatch({
      type: `${actionType.REGISTER_USER}_FULFILLED`,
      payload: data,
    })
  }).catch((error) => {
    const { data } = error.response
    const out = []

    Object.keys(data).forEach((key) => {
      const value = data[key]
      out.push(value)
    })

    const message = {
      title: 'Register',
      message: out.join(' '),
      type: 'error',
    }
    dispatch(showNotification(message))

    reject(error.response)
    dispatch({
      type: `${actionType.REGISTER_USER}_REJECTED`,
      payload: error.response,
    })
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
