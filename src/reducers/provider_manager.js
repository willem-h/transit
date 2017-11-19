import { createReducer } from 'reduxsauce'

import { Types } from '../../providers/actions'

const initialState = {
  loading: false
}

const fetchAllStart = (state = initialState) => ({
  ...state,
  loading: true
})

const handlers = {
  [Types.FETCH_ALL_START]: fetchAllStart
}

export default createReducer(initialState, handlers)
