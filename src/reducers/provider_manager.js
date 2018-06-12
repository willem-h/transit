import { createReducer } from 'reduxsauce'

import { Types } from '../../providers/actions'

const initialState = {
  cards: [],
  loading: false
}

const fetchAllComplete = (state = initialState, { cards }) => ({
  ...state,
  cards: [...state.cards, ...cards],
  loading: false
})

const fetchAllStart = (state = initialState) => ({
  ...state,
  loading: true
})

const handlers = {
  [Types.FETCH_ALL_START]: fetchAllStart,
  [Types.FETCH_ALL_COMPLETE]: fetchAllComplete
}

export default createReducer(initialState, handlers)
