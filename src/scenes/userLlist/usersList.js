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
        <div className="list" key={index}>
          <ul className="list-ul">
            <li>{item.firstName}</li>
            <li>{item.lastName}</li>
            <li>{item.email}</li>
            <li>{item.role}</li>
            <li><button>Delite</button></li>
            <li><button>Updata</button></li>
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
