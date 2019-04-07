import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './login.scss'

class Login extends Component {
  state = {
    email: 'sasans87@gmail.com',
    password: 'admin',
  }

  onFieldChange = (e) => {
    const { value, name } = e.target
    this.setState({
      [name]: value,
    })
  }

  login = () => {
    const { loginUser } = this.props
    loginUser(this.state)
  }

  render() {
    const { email, password } = this.state
    return (
      <section className="login-form">
        <div className="login-inner">
          <div className="form-item">
            <label htmlFor="username">Username:</label>
            <input
              value={email}
              id="username"
              type="text"
              name="email"
              placeholder="username"
              onChange={this.onFieldChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="password">Password:</label>
            <input
              value={password}
              id="password"
              type="password"
              name="password"
              placeholder="password"
              onChange={this.onFieldChange}
            />
          </div>

          <button onClick={this.login}>Login</button>
        </div>
      </section>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func,
}

Login.defaultProps = {

}

export default Login
