/* eslint-disable */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Link } from "react-router-dom";

import router from '@/const/router'
import { reformatUrl } from '@/utils/reformat'

import './header.css'

class Header extends Component {
  constructor () {
    super()
  }

  render() {
    // console.log(this.props.user)
    const {user}=this.props
    return (
      <div className="meni">
        <h1 className="naslov">E-Dnevnik</h1>
        <p>slika</p>

        <div className="navMeni">
          <Link to={reformatUrl(router.HOME)}>Home</Link>
          <Link display-if={!this.props.user} to={reformatUrl(router.LOGIN)}>Login</Link>
          <Link to={reformatUrl(router.REGISTER)}>Register</Link>
        </div>
        <div display-if={user}>
          <p>{user.firstName} {user.lastName}</p>
          <Link display-if={this.props.user} to={router.LOGOUT}>Log Out </Link>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  user: PropTypes.object,
}

Header.defaultProps = {

}

export default Header
