import { takeLatest } from 'redux-saga/effects'

import { Types } from '../../actions'

const start = function * () {
  console.log('We are in the sagas!!!!!')
}

const fetchAll = function * () {
  yield takeLatest(Types.FETCH_ALL_START, start)
}

export default fetchAll
