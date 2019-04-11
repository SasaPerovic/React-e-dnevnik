import PropTypes from 'prop-types'
import { Component } from 'react'

class roleView extends Component {
  render() {
    const { user, role } = this.props
    if (!user || role.length === 0) {
      return null
    }
    if (!role.includes(user.role)) {
      return null
    }
    return this.props.children
  }
}

roleView.propTypes = {
  role: PropTypes.array.isRequired,
  user: PropTypes.object,
  children: PropTypes.element,
}

export default roleView
