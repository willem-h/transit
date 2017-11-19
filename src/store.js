import createSagaMiddleware from 'redux-saga'
import { applyMiddleware } from 'redux'

import createStore from './config/createStore'
import reducers from './reducers'
import sagas from './sagas'

const initialState = {}
const sagaMiddleware = createSagaMiddleware()


export default createStore(
  reducers,
  initialState,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)
