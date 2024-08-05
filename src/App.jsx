import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-container'>
      <div class="container-items">
        <span class="page-title"> Welcome back.</span>
        <div class="page-form">
            <label for="email">Email/address</label>
          <input type="text" id="email" placeholder="info Fuko.com" />
            <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />
          <a href="#" class="forgot-pwd-btn">Forgot password?</a>
          <a href="#" onclick="login()" class="sign-in-btn">Sign in</a>
          <div class="signup-btn">
            <span>Don't have an acount </span>
            <a href="#">sign up now</a>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
