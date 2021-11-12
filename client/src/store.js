import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import appReducer from './store/redux' 

let middleware = [
    // `withExtraArgument` gives access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({ axios }),
  ]

  const RESET_STORE = 'RESET_STORE'
  export const resetStore = () => ({ type: RESET_STORE })
  const rootReducer = (state, action) => {
    if (action.type === RESET_STORE) {
      state = undefined
      return appReducer(state, action)
    }
    return appReducer(state, action)
  }
  
  export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  