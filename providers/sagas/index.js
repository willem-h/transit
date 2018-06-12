import { fork } from 'redux-saga/effects'

import goCard from '../go_card/sagas'

const providers = function*() {
  yield fork(goCard)
}

export default providers
