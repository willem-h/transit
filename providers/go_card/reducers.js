import { createReducer } from 'reduxsauce'

const initialState = {
  cardNumber: '',
  password: ''
}

const handlers = {}

export default createReducer(initialState, handlers)
