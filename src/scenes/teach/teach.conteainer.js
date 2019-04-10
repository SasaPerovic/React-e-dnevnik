import { connect } from 'react-redux'

import teach from './teach'

const mapStateToProps = (state) => {
  const { user } = state.store.users
  return {
    user,
  }
}

export default connect(mapStateToProps, null)(teach)
