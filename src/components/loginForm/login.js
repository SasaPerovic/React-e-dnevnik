/* eslint-disable */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Login extends Component {
  constructor () {
    super()
  }

  render() {
    return (
      <div>
        <label>Username:</label>
        <input type="text" name="username"  placeholder="username"/><br/>
        <label>Password:</label>
        <input type="password" name="password" placeholder="password"/>

      </div>
    )
  }
}

Login.propTypes = {

}

Login.defaultProps = {

}

export default Login
