import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { NavLink, Link } from 'react-router-dom'

import router from '@/const/router'
import { reformatUrl } from '@/utils/reformat'
import Logo from '@/components/logo'
import './header.scss'

class Header extends Component {
  render() {
    const { user } = this.props
    return (
      <header className="main-header">
        <div className="page-holder">
          <Logo />
          <nav className="main-nav">
            <NavLink to={reformatUrl(router.HOME)}>Home</NavLink>
            <NavLink display-if={!this.props.user} to={reformatUrl(router.LOGIN)}>Login</NavLink>
            <NavLink to={reformatUrl(router.REGISTER)}>Register</NavLink>
            <NavLink to={reformatUrl(router.INFO_USER)}>Profile</NavLink>
            <NavLink to={reformatUrl(router.TEACH)}>Subject</NavLink>
            <NavLink to={reformatUrl(router.USERS_LIST)}>List</NavLink>
          </nav>
          <div>
            <div className="user-info" display-if={user}>
              <p>{user.firstName} {user.lastName}</p>
              <Link display-if={this.props.user} to={router.LOGOUT}>Log Out </Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  user: PropTypes.object,
}

export default Header
