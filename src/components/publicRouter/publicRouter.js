import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import routesLink from '@/const/router'
import { reformatUrl } from '@/utils/reformat'

class PublicRoute extends Component {
  renderPublicRouteBody = (props) => {
    const {
      RouteComponent,
      currentUser,
    } = this.props

    if (!currentUser && RouteComponent) {
      return (
        <RouteComponent {...props} />
      )
    }

    return (
      <Redirect to={{
        pathname: reformatUrl(routesLink.HOME),
        state: { from: props.location },
      }}
      />
    )
  }

  render() {
    return (
      <Route
        path={this.props.path}
        render={this.renderPublicRouteBody}
      />
    )
  }
}

PublicRoute.propTypes = {
  currentUser: PropTypes.object,
  path: PropTypes.string,
  RouteComponent: PropTypes.func,
}

PublicRoute.defaultProps = {
  currentUser: null,
  path: reformatUrl(),
  RouteComponent: null,
}

export default PublicRoute
