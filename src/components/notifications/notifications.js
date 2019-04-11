import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications'

import 'react-notifications/lib/notifications.css'

class Notification extends Component {
  componentDidUpdate() {
    const { notification } = this.props
    if (notification) {
      this.createNotification(notification)
    }
  }

  createNotification = (notification) => {
    const { clearNotification } = this.props
    const { type, message } = notification

    if (type) {
      switch (type) {
        case 'info':
          NotificationManager.info(message)
          break
        case 'success':
          NotificationManager.success(message)
          break
        case 'warning':
          NotificationManager.warning(message)
          break
        case 'error':
          NotificationManager.error(message)
          break
        default:
          clearNotification()
      }
    }
    clearNotification()
  }

  render() {
    return (
      <Fragment>
        <NotificationContainer />
      </Fragment>
    )
  }
}

Notification.propTypes = {
  clearNotification: PropTypes.func,
  notification: PropTypes.object,
}

export default Notification
