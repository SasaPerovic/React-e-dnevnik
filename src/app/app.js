/* eslint-disable */
import PropTypes from 'prop-types'
import React, {Component, Fragment} from 'react'

import Header from '@/components/header'
import Footer from '@/components/footer'

import attachRoutes from '@/app/routes'

import { apiPost } from '@/services/api'

import './app.css'

class App extends Component {
  constructor () {
    super()
  }

  componentDidMount() {
    apiPost('login', {
      email: 'sasans87@gmail.com',
      password: 'admin',
    }).then((respond) => {
      console.warn('user', respond)
    })
  }


  render() {
    return (
      <Fragment>
        <section className="conteiner">
          <Header className="header" />
          <main>
            { attachRoutes() }
          </main>
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
