import React from 'react'
import { Link } from 'react-router'

const HomeComponent = (props) => {
  return (
    <div>
      <h1>Flashcards</h1>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default HomeComponent
