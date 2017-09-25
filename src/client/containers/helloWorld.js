import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGreet } from '../actions/index'

class HelloWorld extends Component {
  componentDidMount () {
    this.props.fetchGreet()
  }

  render () {
    return <div className='hello-world'>
      <p>Hello world!</p>
      {this.props.greet === ''
        ? <p>Connecting to Redux...</p>
        : <p>{this.props.greet}</p>
      }
    </div>
  }
}

function mapStateToProps (state) {
  return { greet: state.greet }
}

export default connect(
  mapStateToProps,
  { fetchGreet }
)(HelloWorld)
