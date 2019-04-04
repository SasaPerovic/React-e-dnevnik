import { connect } from 'react-redux'

import { loginUser } from '@/store/users/action'

import login from './login'

// const mapStateToProps = (state) => {
//   const { search11 } = state.LD
//   return {
//     search11,
//   }
// }

const matchDispatchToProps = {
  loginUser,
}

export default connect(null, matchDispatchToProps)(login)
