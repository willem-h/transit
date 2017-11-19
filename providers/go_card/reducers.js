import { createReducer } from 'reduxsauce'

const initialState = {
  cardNumber: '0160000748905904',
  password: 'AtX^DxJS5IIIHKa9'
}

const handlers = {}

export default createReducer(initialState, handlers)
