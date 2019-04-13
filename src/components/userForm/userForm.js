/* eslint-disable */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

const initState = {
  email: '',
  role: 'admin',
  firstName: '',
  lastName: '',
}

class UserForm extends Component {
  constructor(props) {
    super(props);
    const { values } = props

    this.state = {
      ...initState,
      ...values,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { id } = prevState

    if (nextProps.values.id !== id) {
      return nextProps.values
    }

    return null
  }


  onFieldChange = (e) => {
    const { value, name } = e.target
    this.setState({
      [name]: value,
    })
  }

  onSelectChange = (e) => {
    const { value, name } = e.target

    this.setState({
      [name]: value,
    })
  }

  save = () => {
    const { handleSave } = this.props
    const mutableState = {}

    Object.keys(this.state).forEach(key => {
      if (this.state[key] !== this.props.values[key]) {
        mutableState[key] = this.state[key]
      }
    })

    if (handleSave) {
      mutableState.id = this.state.id
      handleSave(mutableState)
    }
  }

  cancel = () => {
    const { handleCancel } = this.props
    handleCancel()
  }

  render() {
    const {
      email, role, firstName, lastName,
    } = this.state

    return (
      <div className="user-form">
        <div className="form-item">
          <label htmlFor="name">First name:</label>
          <input
            value={firstName || ''}
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.onFieldChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="name">Last name:</label>
          <input
            value={lastName || ''}
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={this.onFieldChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="email">Email:</label>
          <input
            value={email || ''}
            id="email"
            type="email"
            name="email"
            placeholder="email"
            onChange={this.onFieldChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="role">role:</label>
          <select value={role} name="role" onChange={this.onSelectChange}>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="parent">Parent</option>
          </select>
        </div>

        <button onClick={this.save}>Save</button>
        <button onClick={this.cancel}>Cancel</button>
      </div>
    )
  }
}

UserForm.propTypes = {
  handleSave: PropTypes.func,
  handleCancel: PropTypes.func,
  values: PropTypes.object,
}

export default UserForm
