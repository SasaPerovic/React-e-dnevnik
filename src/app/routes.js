/* eslint-disable */

import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import routes from '@/const/router'

import { reformatUrl } from '@/utils/reformat'
import PrivateRouter from '@/components/privateRouter'
import PublicRouter from '@/components/publicRouter'
import LoginForm from '@/scenes/loginForm'

function Home() {
  return (
    <h1>home</h1>
  )
}

function PageNotFound() {
  return (
    <h1>not found</h1>
  )
}

const attachRoutes = (user) => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <Redirect to={reformatUrl(routes.HOME)}/>
      )}
    />

    <PrivateRouter
      currentUser={user}
      path={reformatUrl(routes.HOME)}
      RouteComponent={Home}
    />

    <PublicRouter
      currentUser={user}
      path={reformatUrl(routes.LOGIN)}
      RouteComponent={LoginForm}
    />

    <Route
      path="*"
      component={PageNotFound}
    />
  </Switch>
)

export default attachRoutes
