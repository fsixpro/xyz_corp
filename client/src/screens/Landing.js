import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Landing = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }
  return (
    <div className='landing'>
      <div className='dark-overlay landing-inner text-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <p className='lead'>Welcome to XYZ pet update</p>
              <hr />
              <Link to='/register' className='btn btn-lg btn-info rounded mr-2'>
                Sign Up
              </Link>
              <Link to='/login' className='btn btn-lg btn-success rounded'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
