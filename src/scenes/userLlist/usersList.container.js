import { connect } from 'react-redux'

import usersList from './usersList'
import { getUsers } from '@/store/users/action'

const mapStateToProps = (state) => {
  const { users } = state.store.users
  return {
    users,
  }
}

const matchDispatchToProps = {
  getUsers,
}

export default connect(mapStateToProps, matchDispatchToProps)(usersList)
