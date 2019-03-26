/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import { routerMiddleware, connectRouter, ConnectedRouter } from 'connected-react-router'

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

import appReducer from '@/app/reducer'
import App from '@/app'

const store = createStore(
  connectRouter(history)(appReducer),
  composeWithDevTools(applyMiddleware(
    promise(),
    thunk,
    routerMiddleware(history),
  )),
)


const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app'),
  )
}

render()
