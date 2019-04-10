/* eslint-disable */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Teach extends Component {
  render() {
    console.log(this.props)
    const { user } = this.props
      return (
        <section>
          <div>
            <ul>
              <li>Subject name: {user.name}</li>
              <li>First name: {user.firstName}</li>
              <li>Last name: {user.lastName}</li>
            </ul>
          </div>
        </section>
      )
  }
}

Teach.propTypes = {
  user: PropTypes.object,
}

Teach.defaultProps = {

}

export default Teach
