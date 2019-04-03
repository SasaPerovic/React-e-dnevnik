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
    return (
      <div className="meni">
        <h1 className="naslov">E-Dnevnik</h1>
        <p>slika</p>

        <div className="navMeni">
          <Link to={reformatUrl(router.HOME)}>Home</Link>
          <Link to={reformatUrl(router.LOGIN)}>Login</Link>
          <Link to={reformatUrl(router.REGISTER)}>Register</Link>
        </div>
      </div>
    )
  }
}

Header.propTypes = {

}

Header.defaultProps = {

}

export default Header
