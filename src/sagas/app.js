import { put, take } from 'redux-saga/effects'

import ProviderActions from '../../providers/actions'
import { Types as AppTypes } from '../actions/app'

const app = function*() {
  yield take(AppTypes.LOAD_COMPLETE)
  yield put(ProviderActions.fetchAllStart())
}

export default app
