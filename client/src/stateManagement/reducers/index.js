import { combineReducers } from 'redux'
import authReducer from './authReducer'
import channelReducer from './channelReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  channel: channelReducer,
})
export default rootReducer
