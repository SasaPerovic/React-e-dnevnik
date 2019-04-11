/**
 * @param variable
 *   type: 'error, info, warning, success',
 *   message: string,
 * @returns {Function}
 */
export const showNotification = variable => (dispatch) => {
  dispatch({
    type: 'showNotification',
    payload: variable,
  })
}

export const clearNotification = () => (dispatch) => {
  dispatch({
    type: 'clearNotification',
    payload: null,
  })
}
