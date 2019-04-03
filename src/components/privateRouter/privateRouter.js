
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import router from '@/const/router'

import { reformatUrl } from '@/utils/reformat'

class PrivateRouter extends Component {
  renderPrivateRouteBody = (props) => {
    const { currentUser, RouteComponent } = this.props

    if (currentUser) {
      return (
        <RouteComponent {...props} />
      )
    }

    return (
      <Redirect to={{
        pathname: reformatUrl(router.LOGIN),
        state: { from: props.location },
      }}
      />
    )
  }

  render() {
    return (
      <Route
        path={this.props.path}
        render={this.renderPrivateRouteBody}
      />
    )
  }
}

PrivateRouter.propTypes = {
  currentUser: PropTypes.object,
  path: PropTypes.string,
  RouteComponent: PropTypes.func,
}

PrivateRouter.defaultProps = {
  currentUser: null,
  path: reformatUrl(),
  RouteComponent: null,
}

export default PrivateRouter
