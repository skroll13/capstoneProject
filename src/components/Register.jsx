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
        console.log("User was successfully created")
        navigate('/login')
      })
    )
  }

  return (
    <>
      <div className='justify-center ml-10 mr-10 '>
        <div className='justify-center col-lg-7 py-3 py-md-5'>
          <h1 className='justify-center font-mono text-red-700 mt-10 '>Register</h1>
          <br  />
          <p className='justify-center font-mono col-lg-5    '>
            Once registered, you will be able to search for episodes of your
            favorite podcast, save episodes to listen to in the future and keep
            track of episodes you have already heard.
          </p>
        </div>
       
        {/* <div className='font-mono grid-cols-3'> */}
        <div className='justify-center font-mono col-lg-5 pl-lg-5 pb-23 py-lg-5'>
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
            {""}
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
            <br  />
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
    </>
  )
}

export default Register
