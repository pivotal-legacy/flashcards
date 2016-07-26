import { shallow } from 'enzyme'
import React from 'react'
import AppComponent from '../src/AppComponent'

describe('AppComponent', () => {
  it('does not generate errors', () => {
    const component = shallow(<AppComponent />)
  })
})
