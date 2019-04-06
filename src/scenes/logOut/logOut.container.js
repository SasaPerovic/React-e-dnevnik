import { connect } from 'react-redux'

import { logOutUser } from '@/store/users/action'

import logOut from './logOut'

const matchDispatchToProps = {
  logOutUser,
}

export default connect(null, matchDispatchToProps)(logOut)
