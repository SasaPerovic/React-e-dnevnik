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
    const { type, message, title } = notification

    if (type) {
      switch (type) {
        case 'info':
          NotificationManager.info(message, title)
          break
        case 'success':
          NotificationManager.success(message, title)
          break
        case 'warning':
          NotificationManager.warning(message, title)
          break
        case 'error':
          NotificationManager.error(message, title)
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
