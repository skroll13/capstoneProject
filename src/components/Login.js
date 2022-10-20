// import { authContext } from './context/AuthContext/AuthContext'
// import Menu from './layouts/Menu'
// import { Disclosure } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { PlusIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
// import { Link } from "react-router-dom";  //this will be used if we link out to the registration page
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../actions/actions'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onChangeInput = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
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
    <>
      <section className='py-24 md:py-32 bg-white'>
        <div className='container px-4 mx-auto'>
          <div className='max-w-sm mx-auto'>
            <div className='mb-6 text-center'>
              <h3 className='font-mono mb-4 text-2xl md:text-3xl font-bold'>
                Login to your account
              </h3>
              <p>
                {/* {userAuth?.error && ( */}
                {/* <span className="text-red-500">{userAuth?.error}</span> */}
                {/* )} */}
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='font-mono mb-6'>
                <label
                  className=' block mb-2 text-coolGray-800 font-medium'
                  htmlFor
                >
                  Email
                </label>
                <input
                  onChange={onChangeInput}
                  value={email}
                  name='email'
                  className='font-mono appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lgshadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'
                  type='email'
                  placeholder='user@email.com'
                />
              </div>
              <div className='font-mono mb-4'>
                <label
                  className='block mb-2 text-coolGray-800 font-medium'
                  htmlFor
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={onChangeInput}
                  name='password'
                  className='appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lgshadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'
                  type='password'
                  placeholder='************'
                />
              </div>

              <button
                className='font-mono inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 rounded-md shadow-sm'
                type='submit'
              >
                Login
              </button>
              <p className='text-center'>
                <span className='font-mono text-xs font-medium'>
                  Don’t have an account?
                   {/* <a href='#'>Register</a> */}
                </span>
                {" "}
                <button
                  className='font-mono inline-block text-xs font-medium text-red-500 hover:text-red-600 hover:underline'
                  type='submit'
                >
                  Register
                </button>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
