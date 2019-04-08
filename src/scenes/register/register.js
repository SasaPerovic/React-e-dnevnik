/* eslint-disable */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "",
  }
  onFieldChange = (e) => {
    const { value, name } = e.target
    this.setState({
      [name]: value,
    })
  }
  register = () => {
    const { registerUser } = this.props
    registerUser(this.state).catch((error => {
      console.warn('eror: ', error)
    }))
  }

  render() {
    const { name, email, password, password_confirmation, role} = this.state
    return (
      <section className="login-form">
        <div className="login-inner">
          <div className="form-item">
            <label htmlFor="name">Name:</label>
            <input
              value={name}
              id="name"
              type="text"
              name="name"
              placeholder="name"
              onChange={this.onFieldChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="email">Email:</label>
            <input
              value={email}
              id="email"
              type="email"
              name="email"
              placeholder="email"
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
          <div className="form-item">
            <label htmlFor="password_confirmation">Password confirmation:</label>
            <input
              value={password_confirmation}
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              placeholder="password confirmation"
              onChange={this.onFieldChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="role">role:</label>
            <select name="role" onChange={this.onFieldChange}>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="parent">Parent</option>
            </select>
          </div>
          <button onClick={this.register}>Submit</button>
        </div>
      </section>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func,
}

Register.defaultProps = {

}

export default Register
