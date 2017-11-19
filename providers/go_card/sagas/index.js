import { fork } from 'redux-saga/effects'

import { fetchAll } from './fetch_all'

export default function * () {
  yield fork(fetchAll)
}
