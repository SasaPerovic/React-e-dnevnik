/* eslint-disable */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
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

          <a href="google.com">Home</a>
          <a href="google.com">Login</a>
          <a href="google.com">Registre</a>

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
