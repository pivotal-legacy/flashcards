import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import HomeComponent from './HomeComponent'
import LoginComponent from './LoginComponent'

const AppComponent = (props) => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={HomeComponent}/>
      <Route path="/login" component={LoginComponent}/>
    </Router>
   )
}

export default AppComponent
