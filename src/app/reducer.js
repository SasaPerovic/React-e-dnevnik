import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// import storeReducers from '@/store/reducer'

const appReducer = combineReducers({
  // store: storeReducers,
  router: routerReducer,
})

export default appReducer
