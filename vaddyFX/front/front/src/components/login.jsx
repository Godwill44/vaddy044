import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Login() {

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState(null)
  const Navigate = useNavigate()
  axios.defaults.withCredentials = true

  const handleSubmit = (event) => {
    Event.preventDefault()
    axios.post('http://localhost:3009/auth/adminlogin', values)
      .then(result => {
        if (result.data.loginStatus) {
          localStorage.setItem("valid", true)
          navigate('/dashboard')
        } else {
          setError(result.data.error)
        }
      })
      .catch(err => console.log(err))
  }


  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='p-3 rounded w-25 border loginForm'>
        <div className='text-warning'>
          {error && error}
        </div>
        <h2>Login page</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email:</strong></label>
            <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
              onChange={(e) => setValues({ ...values, email: e.target.value })} className='form-control rounded-0' />
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password:</strong></label>
            <input type="password" name='password' autoComplete='off' placeholder='Enter password'
              onChange={(e) => setValues({ ...values, email: e.target.value })} className='form-control rounded-0' />
          </div>
          <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
          <button className='btn btn-secondary w-100 rounded-0 mb-2' onClick={()=>{Navigate('/registration')}}>Create Account</button>
          <div className='mb-1'>
            {/* <input type="checkbox" name="tick" id="tick" className='me-2' />*/}
            <label htmlFor="password">You are Agree with terms & condition</label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login