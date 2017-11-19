import { combineReducers } from 'redux'

import providers from './providers'

import goCard from '../../providers/go_card/reducers'

export default combineReducers({
  providers,
  goCard
})
