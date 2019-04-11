/* eslint-disable */
import { connect } from 'react-redux'

import { clearNotification } from '@/store/notification/action'

import notifications from './notifications'

const mapStateToProps = (state) => {
  const { notification } = state.store.notifications
  return {
    notification,
  }
}

const matchDispatchToProps = {
  clearNotification,
}

export default connect(mapStateToProps, matchDispatchToProps)(notifications)
