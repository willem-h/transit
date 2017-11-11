import React from 'react'
import { Provider } from 'react-redux'
import { Text } from 'react-native'

import store from './store'
import Home from './screens/home'

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
)
