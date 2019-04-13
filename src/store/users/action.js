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

export function getUser() {
  return {
    type: `${actionType.GET_USER}`,
    payload: apiGet('user'),
  }
}

export const getUsers = () => (dispatch) => {
  dispatch({
    type: `${actionType.GET_USERS}`,
    payload: apiGet('users'),
  })
}

export const logOutUser = () => (dispatch) => {
  removeAuthCookie()
  dispatch({
    type: actionType.LOGOUT_USER,
    payload: [],
  })
}

export const removeUser = variables => (dispatch, state) => {
  const { users } = state().store.users
  const { id } = variables

  apiGet(`user/delete/${id}`).then(() => {
    const mutableUsers = users.filter(item => item.id !== id)
    dispatch({
      type: actionType.DELETE_USER,
      payload: mutableUsers,
    })
  })
}

/* eslint-disable */
export const editUser = variables => (dispatch, state) => new Promise((resolve, reject) => {
  const { users } = state().store.users

  apiPost('user/update', variables).then((data) => {
    const mutableUsers = [...users]
    const index = mutableUsers.findIndex(el => el.id === variables.id)

    const {
      email, role, firstName, lastName, id,
    } = data.data.user

    const newUser = {
      email,
      role,
      firstName,
      lastName,
      id,
    }
    mutableUsers[index] = newUser

    resolve(newUser)

    dispatch({
      type: actionType.UPDATE_USER,
      payload: mutableUsers,
    })
  }).catch((error) => {
    reject(error.response)
  })
})
