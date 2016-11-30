import React, {Component} from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import createlogger from 'redux-logger'

import * as reducers from './reducers'
import Git from './git'

const logger = createlogger()
const createStoreWithMiddleware = applyMiddleware(logger)(createStore)
const store = createStoreWithMiddleware(combineReducers(reducers))

const Main = () => {
  return (
    <Provider store={store}>
      <Git />
    </Provider>
  )
}

export default Main



// Router - Navigator , bind with store.
// apiService Promised and handled .


