import { createStore, combineReducers } from 'redux'

// import all reducers
import exampleReducer from './exampleReducer'

const rootReducer = combineReducers({exampleReducer})

export default createStore(rootReducer)
