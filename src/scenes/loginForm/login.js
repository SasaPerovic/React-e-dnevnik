/* eslint-disable */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Login extends Component {
  constructor () {
    super()
  }

  render() {
    return (
      <section className="login-form">

        <div className="form-item">
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" name="username"  placeholder="username"/><br/>
        </div>

        <div className="form-item">
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" name="password" placeholder="password"/>
        </div>

      </section>
    )
  }
}

Login.propTypes = {

}

Login.defaultProps = {

}

export default Login
