import React from 'react'
import { createReducer } from 'reduxsauce'

import GoCard from './component'
import { Types } from './actions'

const initialState = {
  cardNumber: '',
  password: ''
}

const handlers = {}

export default createReducer(initialState, handlers)
