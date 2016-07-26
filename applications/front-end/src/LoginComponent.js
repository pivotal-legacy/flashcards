import React from 'react'

const LoginComponent = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <label>
        Login: <input name="username"/>
      </label>
      <label>
        Password: <input type="password" name="password"/>
      </label>
    </div>
  )
}

export default LoginComponent
