import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register } from '../actions/actions'



const Register = () => {
  const [fullname, setFullName] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(
      register({ fullname, email, password }, () => {
        console.log('User was successfully created')
        navigate('/login')
      })
    )
  }

  return (
    <>

    <container>

      <div className='justify-center ml-10 mr-10 '>
        <div className='justify-center col-lg-7 py-3 py-md-5'>
          <h1 className='text-center font-mono text-red-700 mt-10 text-bold'>
            Register
          </h1>
          <br />
          <p className='container mx-auto whitespace-normal font-mono flex-auto center-alig mr-20'>
            Once registered, you will be able to search for episodes of your
            favorite podcast, save episodes to listen to in the future and keep
            track of episodes you have already heard.  Lastly, you are able to hear the podcast right within the app.
          </p>
        </div>


        
        <div className='static font-mono '>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                onChange={e => setFullName(e.target.value)}
                id='fullName-register'
                name='fullName'
                className='justify-center form-control'
                type='text'
                placeholder='Enter your Name'
                autoComplete='off'
              />
            </div>
            <br />
            <div className='form-group'>
              {''}
              <input
                onChange={e => setEmail(e.target.value)}
                id='email-register'
                name='email'
                className='form-control'
                type='text'
                placeholder='Enter your email '
                autoComplete='off'
              />
            </div>
            <br />
            <div className='form-group'>
       
       
              <input
                onChange={e => setPassword(e.target.value)}
                id='password-register'
                name='password'
                className='form-control'
                type='password'
                placeholder='Create a password'
              />
            </div>
            <button
              type='submit'
              className='font-mono py-20 mt-4 btn btn-md btn-danger btn-block'
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      </container>


    </>
  )
}

export default Register