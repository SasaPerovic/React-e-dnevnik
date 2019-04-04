import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import app from './app'

const mapStateToProps = (state) => {
  const { user } = state.store.users
  return {
    user,
  }
}

const matchDispatchToProps = {}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(app))
