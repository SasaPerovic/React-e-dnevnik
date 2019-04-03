/* eslint-disable */
import PropTypes from 'prop-types'
import React, {Component, Fragment} from 'react'

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
      <Fragment>
        <section className="conteiner">
          <Header className="header" />
          <Content className="content"/>
          <Login/>
        </section>
        <Footer className="footer"/>
      </Fragment>
    )
  }
}

App.propTypes = {

}

App.defaultProps = {

}

export default App
