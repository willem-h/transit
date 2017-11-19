import { takeLatest } from 'redux-saga/effects'

import { Types } from '../../../src/actions/providers'

const start = function * () {
  console.log('We are in the sagas!!!!!')
}

export default function * () {
  yield takeLatest(Types.FETCH_ALL_START, start)
}
