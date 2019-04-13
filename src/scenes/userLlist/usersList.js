/* eslint-disable */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import size from 'lodash/size'
import isArray from 'lodash/isArray'

import UserFrom from '@/components/userForm'
import {showNotification} from "@/store/notification/action";

import './style.scss'

class UsersList extends Component {
  state = {
    edit: false,
    selectedUser: null,
  }

  componentDidMount() {
    const { getUsers } = this.props
    getUsers()
  }

  handleRemoveUser = (id) => () => {
    const { removeUser } = this.props
    removeUser({ id })
  }

  handleSave = (user) => {
    const { editUser, showNotification } = this.props

    if(size(user) > 1) {
      editUser(user).then(() => {
        this.setState({
          edit: false,
          selectedUser: null,
        })
      }).catch((error) => {

        let message = ''

        Object.keys(error.data).forEach(key => {
          if (isArray) {
            message += ` ${error.data[key][0]}`
          } else {
            message += ` ${error.data[key]}`
          }
        })

        showNotification({
          type: 'error',
          message,
        })
      })
    }
  }

  handleCancel = () => {
    this.setState({
      edit: false,
      selectedUser: null,
    })
  }

  handleEdit = (user) => () => {
    this.setState({
      edit: true,
      selectedUser: user,
    })
  }

  renderFormEdit = () => {
    if(!this.state.edit) return null
    return (
      <UserFrom
        handleSave={this.handleSave}
        handleCancel={this.handleCancel}
        values={this.state.selectedUser}
      />
    )
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
              users.map((lista, index) => {
                return(
                  <tr key={index}>
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
                      <button onClick={this.handleEdit(lista)}>Edit</button>
                    </td>
                    <td>
                      <button onClick={this.handleRemoveUser(lista.id)}>Delete</button>
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
        <div className="user-table">
          { this.renderUsersList() }
          { this.renderFormEdit() }
        </div>
      </section>
    )
  }
}

UsersList.propTypes = {
  editUser: PropTypes.func,
  removeUser: PropTypes.func,
  getUsers: PropTypes.func,
  users: PropTypes.array,
}

UsersList.defaultProps = {

}

export default UsersList
