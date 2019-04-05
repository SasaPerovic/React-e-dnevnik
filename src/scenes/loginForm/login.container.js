import { connect } from 'react-redux'

import { loginUser } from '@/store/users/action'

import login from './login'

const matchDispatchToProps = {
  loginUser,
}

export default connect(null, matchDispatchToProps)(login)
