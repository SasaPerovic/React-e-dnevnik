import { combineReducers } from 'redux'

import UsersReducer from './users/redux'
import SubjectReducer from './subject/redux'

const storeReducers = combineReducers({
  users: UsersReducer,
  dnevnik: SubjectReducer,
})

export default storeReducers
