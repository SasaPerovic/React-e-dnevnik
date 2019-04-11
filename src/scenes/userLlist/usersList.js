/* eslint-disable */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class UsersList extends Component {
  componentDidMount() {
    const { getUsers } = this.props
    getUsers()
  }
  renderUsersList() {
    const { users } = this.props

    return users.map((item, index) => {
      return (
        <div key={index}>
          <ul>
            <li>{item.firstName}</li>
            <li>{item.lastName}</li>
            <li>{item.email}</li>
            <li>{item.role}</li>
          </ul>
        </div>
      )
    })
  }

  render() {
    return (
      <section>
        <div>
          { this.renderUsersList() }
        </div>
      </section>
    )
  }
}

UsersList.propTypes = {
  getUsers: PropTypes.func,
  users: PropTypes.array,
}

UsersList.defaultProps = {

}

export default UsersList
