/* eslint-disable */

import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import routes from '@/const/router'

import { reformatUrl } from '@/utils/reformat'
import PrivateRouter from '@/components/privateRouter'
import PublicRouter from '@/components/publicRouter'
import LoginForm from '@/scenes/loginForm'
import LogOut from '@/scenes/logOut'
import Register from '@/scenes/register'
import InfoUser from '@/scenes/infoUser'
import Teach from '@/scenes/teach'
import UsersList from '@/scenes/userLlist'
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

    <PrivateRouter
      currentUser={user}
      path={reformatUrl(routes.LOGOUT)}
      RouteComponent={LogOut}
    />

    <PrivateRouter
      currentUser={user}
      path={reformatUrl(routes.REGISTER)}
      RouteComponent={Register}
    />

    <PrivateRouter
      currentUser={user}
      path={reformatUrl(routes.INFO_USER)}
      RouteComponent={InfoUser}
    />
    <PrivateRouter
      currentUser={user}
      path={reformatUrl(routes.USERS_LIST)}
      RouteComponent={UsersList}
    />
    <PrivateRouter
      currentUser={user}
      path={reformatUrl(routes.TEACH)}
      RouteComponent={Teach}
    />

    <Route
      path="*"
      component={PageNotFound}
    />
  </Switch>
)

export default attachRoutes
