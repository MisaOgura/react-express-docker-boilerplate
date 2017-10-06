import { createStore, combineReducers } from 'redux'
import { changeMessage, CHANGE_MESSAGE, defaultMessage } from '../redux/'
import reducer from '../redux/exampleReducer'

describe('store, reducers, action creators', () => {
  let rootReducer = combineReducers({exampleReducer: reducer})
  let fakeStore
  beforeEach(() => {
    fakeStore = createStore(rootReducer)
  })

  it('Constants are constant', () => {
    expect(CHANGE_MESSAGE).toBe('CHANGE_MESSAGE')
  })

  it('adasdasldnasdlkn', () => {
    const msg = 'A new message'
    expect(changeMessage(msg)).toMatchObject({
      type: 'CHANGE_MESSAGE',
      message: msg
    })
  })

  it('initialized with default state', () => {
    const state = fakeStore.getState().exampleReducer
    expect(state.message).toBe(defaultMessage)
  })

  it('dispatched actions alter the store appropriately', () => {
    const msg = 'A new message'
    fakeStore.dispatch(changeMessage(msg))
    const state = fakeStore.getState().exampleReducer
    expect(state.message).toBe('A new message')
  })

  it('overwrites the state properly with successive dispatches', () => {
    const msg = 'A new message'
    const newerMsg = 'The newest message'
    fakeStore.dispatch(changeMessage(msg))
    fakeStore.dispatch(changeMessage(newerMsg))
    const state = fakeStore.getState().exampleReducer
    expect(state.message).toBe('The newest message')
  })
})
