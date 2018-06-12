import React from 'react'
import { createReducer } from 'reduxsauce'

import GoCard from './component'
import { Types } from './actions'

const initialState = {
  cardNumber: '0160000748905904',
  password: 'AtX^DxJS5IIIHKa9'
}

const handlers = {}

export default createReducer(initialState, handlers)
