import { fork } from 'redux-saga/effects'

import goCard from './go_card/sagas'

export default function * () {
  yield fork(goCard)
}
