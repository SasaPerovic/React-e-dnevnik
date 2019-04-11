import { connect } from 'react-redux'

import { loginUser } from '@/store/users/action'
import { showNotification } from '@/store/notification/action'

import login from './login'

const matchDispatchToProps = {
  loginUser,
  showNotification,
}

export default connect(null, matchDispatchToProps)(login)
