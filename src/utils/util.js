// import axios from 'axios'
import Cookies from 'universal-cookie'
import jwtDecode from 'jwt-decode'
import moment from 'moment'
import isNull from 'lodash/isNull'
import isUndefined from 'lodash/isUndefined'

import config from '@/app/config'

const cookieObject = () => new Cookies()

// Uzima auth cookie iz browsera
export const getBrowserCookie = () => cookieObject().get(config.COOKIE_NAME.AUTH)

// Uzima datum kada token istice
const jwtTokenExp = (token) => {
  const jwtToken = jwtDecode(token)
  return moment.unix(jwtToken.exp).toDate()
}

// proverava da li kuki postoji
export function hasAuthCookie() {
  const authCookieValue = getBrowserCookie()
  return (
    !isNull(authCookieValue)
    && !isUndefined(authCookieValue)
  )
}

// @TODO remove this
// export function setAuthHeader() {
//   if (hasAuthCookie()) {
//     axios.defaults.headers.common[config.AUTH_HEADER] = getBrowserCookie()
//     axios.defaults.headers['Access-Control-Allow-Origin'] = axios.defaults.baseURL
//     return true
//   }
//   return false
// }

// Kreira token cookie
export const saveAuthCookie = ({ token }) => {
  const AUTH_TOKEN = ''.concat('bearer', ' ', token)
  const options = {
    path: '/',
    expires: jwtTokenExp(token),
    sameSite: true,
  }
  cookieObject().set(config.COOKIE_NAME.AUTH, AUTH_TOKEN, options)
  // setAuthHeader()
}
