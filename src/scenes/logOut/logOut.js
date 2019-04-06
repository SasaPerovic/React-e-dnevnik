import PropTypes from 'prop-types'
import { Component } from 'react'

class LogOut extends Component {
  componentDidMount() {
    const { logOutUser } = this.props
    logOutUser()
  }

  render() {
    return null
  }
}

LogOut.propTypes = {
  logOutUser: PropTypes.func,
}

export default LogOut
