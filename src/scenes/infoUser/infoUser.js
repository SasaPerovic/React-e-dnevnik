/* eslint-disable */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class InfoUser extends Component {


  render() {
    const { user } = this.props

    return (
     <section>
       <div>
          <ul>
            <li>Frst name: {user.firstName} </li>
            <li>Last name: {user.lastName} </li>
            <li>email: {user.email} </li>
            <li>Role: {user.role} </li>
            <li>Address: {user.address} </li>
            <li>Number: {user.number} </li>
            <li>Birthday: {user.birthday} </li>

          </ul>
       </div>
     </section>
    )
  }
}

InfoUser.propTypes = {
  user: PropTypes.object,
}

InfoUser.defaultProps = {

}

export default InfoUser
