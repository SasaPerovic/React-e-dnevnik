import { connect } from 'react-redux'

import { registerUser } from '@/store/users/action'

import register from './register'

const matchDispatchToProps = {
  registerUser,
}

export default connect(null, matchDispatchToProps)(register)
