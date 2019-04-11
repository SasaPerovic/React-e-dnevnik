import { connect } from 'react-redux'

import roleView from './roleView'

const mapStateToProps = (state) => {
  const { user } = state.store.users
  return {
    user,
  }
}

export default connect(mapStateToProps, null)(roleView)
