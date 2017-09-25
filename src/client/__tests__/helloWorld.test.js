import React from 'react'
import { shallow } from 'enzyme'

import HelloWorld from '../containers/helloWorld'

describe('HelloWorld', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<HelloWorld />)
  })

  it('has the correct class name', () => {
    expect(wrapper.hasClass('hello-world')).toBe(true)
  })

  it('renders the correct message', () => {
    expect(wrapper.text()).toContain('Hello world!')
  })
})
