import React, {Component} from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from './reducers'
import Git from './git'

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
// const store = createStoreWithMiddleware(combineReducers(reducers))

let reducer = combineReducers(reducers)
let store = createStore(reducer, applyMiddleware(thunk))

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


