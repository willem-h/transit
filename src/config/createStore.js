import { createStore as reduxCreateStore } from 'redux'

let createStore = reduxCreateStore

if (__DEV__) {
  const Reactotron = require('reactotron-react-native').default
  const reactotronRedux = require('reactotron-redux').reactotronRedux

  Reactotron
    .configure()
    .useReactNative()
    .use(reactotronRedux())
    .connect()

  createStore = Reactotron.createStore

  console.tron = Reactotron
}

export default createStore
