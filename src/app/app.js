/* eslint-disable */
import PropTypes from 'prop-types'
import React, {Component, Fragment} from 'react'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { hasAuthCookie } from '@/utils/util'
import attachRoutes from '@/app/routes'
import Notifications from '@/components/notifications'

import './app.scss'

class App extends Component {
  constructor () {
    super()
  }

  componentDidMount() {
    const { getUser } = this.props
    if (hasAuthCookie()) {
      // @TODO remove cookie on exeption
      getUser()
    }
  }

  render() {
    const { user } = this.props
    return (
      <Fragment>
        <section className="conteiner page">
          <Header
            className="header"
            user={user}
          />
          <main className="page-main">
            <div className="page-holder">
              { attachRoutes(user) }
            </div>
          </main>
        </section>
        <Footer className="footer"/>
        <Notifications />
      </Fragment>
    )
  }
}

App.propTypes = {
  user: PropTypes.object,
  getUser: PropTypes.func,
}

App.defaultProps = {

}

export default App
