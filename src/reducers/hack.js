import { createReducer } from 'reduxsauce'

const initialState = 'Delightful (and stateful) 🎉'

const handlers = {}

export default createReducer(initialState, handlers)
