import { connect } from 'react-redux'

import usersList from './usersList'
import {
  getUsers,
  removeUser,
  editUser,
} from '@/store/users/action'

import { showNotification } from '@/store/notification/action'

const mapStateToProps = (state) => {
  const { users } = state.store.users
  return {
    users,
  }
}

const matchDispatchToProps = {
  getUsers,
  removeUser,
  editUser,
  showNotification,
}

export default connect(mapStateToProps, matchDispatchToProps)(usersList)
