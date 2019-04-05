import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { getUser } from '@/store/users/action'

import app from './app'

const mapStateToProps = (state) => {
  const { user } = state.store.users
  return {
    user,
  }
}

const matchDispatchToProps = {
  getUser,
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(app))
