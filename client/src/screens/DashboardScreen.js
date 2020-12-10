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
  const user = useSelector(state => state.auth.user.email)
  const channel = useSelector(state => state.channel)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  if (!isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <Container>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome {user}
      </p>

      <Container>
        <div className='my-2'>
          <p>List of channel update you are subscribe to will appear here:</p>

          <ListGroup>
            {channel.dog && <ListGroupItem>Dog update</ListGroupItem>}
            {channel.goat && <ListGroupItem>goat update</ListGroupItem>}
            {channel.cat && <ListGroupItem>cat update</ListGroupItem>}
          </ListGroup>
          <p className='mt-2'>
            {' '}
            click on edit button to edit your channel update
          </p>
          <Button className='mt-2' onClick={onClick}>
            Edit
          </Button>
        </div>
      </Container>
    </Container>
  )
}

export default DashboardScreen
