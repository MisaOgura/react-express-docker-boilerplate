import { createStore, combineReducers } from 'redux';
import exampleReducer from './exampleReducer'


const rootReducer = combineReducers({exampleReducer})


export default createStore(rootReducer)
