import { combineReducers } from 'redux'

import UsersReducer from './users/redux'

const storeReducers = combineReducers({
  users: UsersReducer,
})

export default storeReducers
