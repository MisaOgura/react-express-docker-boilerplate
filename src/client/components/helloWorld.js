import React, {Component} from 'react';
import { connect, Provider } from 'react-redux';
import { store, changeMessage } from '../redux'

function HelloWorld(props){
  return (
    <div className='hello-world'>
      <p>Hello world!</p>
      <p> {props.exampleMessage} </p>
    </div>
  )
}


// pass down responsive store state as props
const mapStateToProps = state => ({exampleMessage: state.exampleReducer.message})

//pass down dispatchers as props
const mapDispatchToProps = dispatch => ({changeMessage: txt => dispatch(changeMessage(txt))})

//hook up props with base component
const ConnectedWorld = connect(mapStateToProps, mapDispatchToProps)(HelloWorld)

const App = () => <ConnectedWorld store={store}/>

export default App
