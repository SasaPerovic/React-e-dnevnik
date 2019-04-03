/* eslint-disable */
import axios from 'axios'

const apiUrlConstructor = ({ base = null }) => {
  let fullUrl
  // const url = 'http://dnevnik.dexdev.org/api/'
  const url = 'http://127.0.0.1:8000/api/'

  // Make sure the base is actually a valid element
  if (base) {
    fullUrl = base
  } else {
    throw new Error('Bad Url')
  }

  return url.concat(fullUrl)
}

/**
 * get data from Laravel api
 * @param urlParameters
 * @param headers
 * @returns {AxiosPromise<any>}
 */
export function apiGet(urlParameters, headers = { 'Access-Control-Allow-Origin': '*' }) {
  let axiosConfig
  if (headers && Object.keys(headers).length) {
    axiosConfig = { headers }
  }
  return axios.get(apiUrlConstructor({ base: urlParameters }), axiosConfig)
}

export function apiPost(urlParameters, data, headers = { 'Access-Control-Allow-Origin': '*' }) {
  let axiosConfig
  if (headers && Object.keys(headers).length) {
    axiosConfig = { headers }
  }
  return axios.post(apiUrlConstructor({ base: urlParameters }), data)
}
