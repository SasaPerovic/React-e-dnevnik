import { connect } from 'react-redux'

import infoUser from './infoUser'


const mapStateToProps = (state) => {
  const { user } = state.store.users
  return {
    user,
  }
}

export default connect(mapStateToProps, null)(infoUser)
