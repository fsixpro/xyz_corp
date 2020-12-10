import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../stateManagement/actions/authAction'
const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const onPasswordChange = e => {
    setPassword(e.target.value)
  }
  const onEmailChange = e => {
    setEmail(e.target.value)
  }
  const onSubmit = e => {
    e.preventDefault()
    dispatch(login(email, password))
    history.push('dashboard')
  }
  return (
    <Container>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Sign Into Your Account
      </p>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={onEmailChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onPasswordChange}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </Container>
  )
}
export default LoginScreen
