import { Redirect, Route, Switch } from 'react-router'
import React from 'react'


const attachRoutes = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <Redirect to={reformatUrl(routers.HOME)}/>
      )}
    />

    <Route
      exact
      path={reformatUrl(routers.HOME)}
      component={Home}
    />

    <Route
      path={reformatUrl(routers.REGISTRE)}
      component={Registre}
    />
    <Route
      path={reformatUrl(routers.TEACHER)}
      component={Teacher}
    />
    <Route
      path={reformatUrl(routers.STUDENT)}
      component={Student}
    />
    <Route
      path={reformatUrl(routers.PERENT)}
      component={Perent}
    />
  </Switch>
)

export default attachRoutes;
