import React from 'react'
import { shallow } from 'enzyme'

import HellowWorld from '../components/helloWorld'

describe('HellowWorld', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<HellowWorld />)
  })

  it('has the correct class name', () => {
    expect(wrapper.hasClass('hello-world')).toBe(true)
  })

  it('renders the correct message', () => {
    expect(wrapper.text()).toContain('Hello world from react component!')
  })
})
