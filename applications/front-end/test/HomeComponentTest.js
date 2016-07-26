import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import HomeComponent from '../src/HomeComponent'

describe('HomeComponent', () => {
  it('sets title of page', () => {
    const component = shallow(<HomeComponent/>)
    expect(component.contains(<h1>Flashcards</h1>)).toEqual(true)
  })
})
