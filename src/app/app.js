/* eslint-disable */
import PropTypes from 'prop-types'
import React, {Component, Fragment} from 'react'

import Header from '@/components/header'
import Footer from '@/components/footer'

import attachRoutes from '@/app/routes'

import './app.css'

class App extends Component {
  constructor () {
    super()
  }

  render() {
    const { user } = this.props
    return (
      <Fragment>
        <section className="conteiner">
          <Header className="header" />
          <main>
            { attachRoutes(user) }
          </main>
        </section>
        <Footer className="footer"/>
      </Fragment>
    )
  }
}

App.propTypes = {
  user: PropTypes.object,
}

App.defaultProps = {

}

export default App
