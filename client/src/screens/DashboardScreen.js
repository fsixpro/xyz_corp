import React, { useEffect } from 'react'
import { Button, Container, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getChannel } from '../stateManagement/actions/channelAction'

const DashboardScreen = ({ history }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getChannel())
  }, [dispatch])
  const onClick = () => {
    history.push('editchannel')
  }
  const subscribe = () => {
    history.push('createupdate')
  }
  const user = useSelector(state => state.auth.user.email)
  const channel = useSelector(state => state.channel)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const { dog, goat, cat } = channel
  const checkChanel = dog || goat || cat
  if (!isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <Container>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome {user}
      </p>
      {checkChanel ? (
        <Container>
          <div className='my-2'>
            <p>List of channel update you are :</p>

            <ListGroup>
              {dog && <ListGroupItem>Dog update</ListGroupItem>}
              {goat && <ListGroupItem>goat update</ListGroupItem>}
              {cat && <ListGroupItem>cat update</ListGroupItem>}
            </ListGroup>
            <Button className='mt-2' onClick={onClick}>
              Edit
            </Button>
          </div>
        </Container>
      ) : (
        <Container>
          <div className='my-2'>
            <p>you are not subcribe to any channel, pls click on subcribe </p>

            <Button className='mt-2' onClick={subscribe}>
              Subscribe
            </Button>
          </div>
        </Container>
      )}
    </Container>
  )
}

export default DashboardScreen
