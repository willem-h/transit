import { all, fork } from 'redux-saga/effects'

import app from './app'
import providers from '../../providers/sagas'

const root = function*() {
  yield all([fork(app), fork(providers)])
}

export default root
