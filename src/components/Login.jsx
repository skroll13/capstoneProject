import React, { useState } from 'react'
// import { Link } from "react-router-dom";  //this will be used if we link out to the registration page
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../actions/actions'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    try {
      dispatch(
        login({ email, password }, () => {
          navigate('/SearchPodcast')
        })
      )
    } catch (error) {
      console.log('e.response.data')
      alert('Email or password are incorrect')
    }
  }

  return (
          <Container  className='mainFont'>
          
           <h1>Login</h1>
           <br />
           <p>
            Once logged in, you will be able to search for episodes of your
            favorite podcast, save episodes to listen to in the future and keep
            track of episodes you have already heard.  Lastly, you are able to hear the podcast right within the app.
          </p>
          <Form onSubmit={handleSubmit}>
            
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Form>
          
          </Container>
  )
}

export default Login

