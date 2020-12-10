import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createChannel } from '../stateManagement/actions/channelAction'

const CreateChannelScreen = ({ history }) => {
  const channel = useSelector(state => state.channel)
  const user = useSelector(state => state.auth.user.email)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()
  const [update, setUpdate] = useState({
    dog: channel.dog,
    cat: channel.cat,
    goat: channel.goat,
  })
  const { cat, dog, goat } = update

  const onSubmit = e => {
    e.preventDefault()
    dispatch(createChannel(update))
    history.push('dashboard')
  }
  if (!isAuthenticated) {
    history.push('/')
  }
  return (
    <Container>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome {user}
      </p>

      <Container>
        <div className='my-2'>
          <p>check an update to subscribe or uncheck to unsubscribe</p>
          <form onSubmit={onSubmit}>
            <input
              checked={dog}
              type='checkbox'
              name='dog'
              id='dog'
              onChange={() => {
                setUpdate({ ...update, dog: !dog })
              }}
            />
            <label htmlFor='dog'>Dog update</label>

            <br />
            <input
              checked={cat}
              onChange={() => {
                setUpdate({ ...update, cat: !cat })
              }}
              type='checkbox'
              name='cat'
              id='cat'
            />
            <label htmlFor='cat'> Cat update</label>

            <br />
            <input
              checked={goat}
              onChange={() => {
                setUpdate({ ...update, goat: !goat })
              }}
              type='checkbox'
              name='goat'
              id='goat'
            />
            <label htmlFor='goat'>Goat update</label>
            <br />
            <button type='submit'>submit</button>
          </form>
        </div>
      </Container>
    </Container>
  )
}

export default CreateChannelScreen
