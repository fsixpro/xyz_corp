import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../stateManagement/actions/authAction'
import { Redirect } from 'react-router-dom'
const Header = ({ history }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
    return <Redirect to='/' />
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>XYZ corps</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {isAuthenticated ? (
                <Button onClick={logoutHandler}>Logout</Button>
              ) : (
                <>
                  <LinkContainer to='/login'>
                    <Nav.Link className='mx-2'>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/Register'>
                    <Nav.Link className='mx-2'>Register</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
