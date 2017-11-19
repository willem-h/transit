import { fork } from 'redux-saga/effects'

import providers from '../../providers'

const root = function * () {
  yield fork(providers)
}

export default root
