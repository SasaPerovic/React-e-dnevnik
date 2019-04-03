/* eslint-disable */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Content from '@/components/content'
import './app.css'
import Login from '@/components/loginForm'

class App extends Component {
  constructor () {
    super()
  }

  render() {
    return (
      <section className="conteiner">
          <Header className="header" />
          <Content className="content"/>
          <Login/>
          <Footer className="footer"/>
      </section>
    )
  }
}

App.propTypes = {

}

App.defaultProps = {

}

export default App
