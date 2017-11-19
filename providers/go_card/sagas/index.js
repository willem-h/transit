import { fork } from 'redux-saga/effects'

import fetchAll from './fetch_all'

const sagas = function * () {
  yield fork(fetchAll)
}

export default sagas
