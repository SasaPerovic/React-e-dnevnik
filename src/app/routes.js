/* eslint-disable */

import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import routes from '@/const/router'

import { reformatUrl } from '@/utils/reformat'
import PrivateRouter from '@/components/privateRouter'

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

const attachRoutes = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <Redirect to={reformatUrl(routes.HOME)}/>
      )}
    />

    <PrivateRouter
      // currentUser={currentUser}
      path={reformatUrl(routes.HOME)}
      RouteComponent={Home}
    />

    <Route
      exact
      path={reformatUrl(routes.LOGIN)}
      component={LoginForm}
    />

    <Route
      path="*"
      component={PageNotFound}
    />
  </Switch>
)

export default attachRoutes
