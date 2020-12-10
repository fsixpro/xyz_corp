import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../stateManagement/actions/authAction'
const RegisterScreen = ({ history }) => {
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
    dispatch(register(email, password))
  }
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const error = useSelector(state => state.auth.error)
  if (isAuthenticated) {
    history.push('dashboard')
  }
  return (
    <Container>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create an account
      </p>
      {error && <div className='alert alert-danger'>{error}</div>}

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
            min={3}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
    </Container>
  )
}

export default RegisterScreen
