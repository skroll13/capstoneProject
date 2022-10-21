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
    <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-sm mx-auto">
            <div className="mb-6 text-center">
              <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                Register for an account
              </h3>
            </div>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor
                >
                  Email
                </label>
                <input
                  value={email}
                  onChange={onChangeInput}
                  name="email"
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="email"
                  placeholder="i-novotek@gmail.com"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor
                >
                  Full Name
                </label>
                <input
                  value={fullname}
                  onChange={onChangeInput}
                  name="fullname"
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="text"
                  placeholder="I-Nooovotek Academy"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={onChangeInput}
                  name="password"
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="password"
                  placeholder="************"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between mb-6"></div>
              <button
                className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                type="submit"
              >
                Register
              </button>
              <p className="text-center">
                <span className="text-xs font-medium">
                  Already have an account? <Link to="/login">Sign in</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

      {/* <div className='justify-center ml-10 mr-10 '>
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
        // <div className='justify-center font-mono col-lg-5 pl-lg-5 pb-23 py-lg-5'>
        //   <form onSubmit={handleSubmit}>
        //     <div className='form-group'>
              
              
        //       <input
        //         onChange={e => setFullName(e.target.value)}
        //         id='fullName-register'
        //         name='fullName'
        //         className='justify-center form-control'
        //         type='text'
        //         placeholder='Enter your Name'
        //         autoComplete='off'
        //       />
        //     </div>
        //     <br />
        //     <div className='form-group'>
        //     {""}
        //       <input
        //         onChange={e => setEmail(e.target.value)}
        //         id='email-register'
        //         name='email'
        //         className='form-control'
        //         type='text'
        //         placeholder='Enter your email '
        //         autoComplete='off'
        //       />
        //     </div>
        //     <br  />
        //     <div className='form-group'>
             


        //       <input
        //         onChange={e => setPassword(e.target.value)}
        //         id='password-register'
        //         name='password'
        //         className='form-control'
        //         type='password'
        //         placeholder='Create a password'
        //       />
        //     </div>
        //     <button
        //       type='submit'
        //       className='font-mono py-20 mt-4 btn btn-md btn-danger btn-block'
        //     >
        //       Submit
        //     </button>
        //   </form>
        // </div>
  

export default Register
