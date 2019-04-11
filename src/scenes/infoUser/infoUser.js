/* eslint-disable */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class InfoUser extends Component {
  render() {
    const { user } = this.props
    return (
     <section>
       <div className="list">
          <ul className="list ul" >
            <li>First name: {user.firstName} </li>
            <li>Last name: {user.lastName} </li>
            <li>email: {user.email} </li>
            <li>Role: {user.role} </li>
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
