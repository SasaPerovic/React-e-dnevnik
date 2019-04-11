import { combineReducers } from 'redux'

import UsersReducer from './users/redux'
import SubjectReducer from './subject/redux'
import NotificationReducer from './notification/redux'

const storeReducers = combineReducers({
  users: UsersReducer,
  dnevnik: SubjectReducer,
  notifications: NotificationReducer,
})

export default storeReducers
