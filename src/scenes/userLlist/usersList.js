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
      return (
        <div className="styled-table">
          <table className="styled">
            <thead>
              <tr>
                <th>First name:</th>
                <th>Last name:</th>
                <th>E-mail:</th>
                <th>Role:</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {
              users.map(lista =>{
                return(
                  <tr key={lista.uid}>
                    <td>
                      {lista.firstName}
                    </td>
                    <td>
                      {lista.lastName}
                    </td>
                    <td>
                      {lista.email}
                    </td>
                    <td>
                      {lista.role}
                    </td>
                    <td>
                      <button>Delite</button>
                    </td>
                    <td>
                      <button>Delite</button>
                    </td>

                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
      )

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
