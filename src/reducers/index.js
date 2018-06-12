import { combineReducers } from 'redux'

import providerManager from './provider_manager'
import providers from '../../providers/reducers'

export default combineReducers({
  providerManager,
  providers
})
