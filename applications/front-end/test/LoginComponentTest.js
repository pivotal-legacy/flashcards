import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import LoginComponent from '../src/LoginComponent'

describe('LoginComponent', () => {
  it('sets title of page', () => {
    const component = shallow(<LoginComponent/>)
    expect(component.contains(<h1>Login</h1>)).toEqual(true)
  })

  it('display username and password fields', () => {
    const component = shallow(<LoginComponent/>)
    expect(component.contains(<input name="username"/>)).toEqual(true)
    expect(component.contains(<input type="password" name="password"/>)).toEqual(true)
  })
})
