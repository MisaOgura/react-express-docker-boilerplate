// INITIAL STATE //

// for testing purposes
export const defaultMessage = 'You are now connected to the Redux store!'

const initialState = {
  message: defaultMessage
}

// CONSTANTS //

export const CHANGE_MESSAGE = 'CHANGE_MESSAGE'

// ACTION CREATORS //

export const changeMessage = message => ({type: CHANGE_MESSAGE, message})

// REDUCER //

export default (state = initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case CHANGE_MESSAGE:
      newState.message = action.message
      return newState
    default:
      return state
  }
}
