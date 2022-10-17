import React, {useState, useContext} from "react"
import { Link } from 'react-router-dom'
import { authContext } from '../context/AuthContext'
import Axios from 'axios'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { register } from "../actions/actions"


const Register = () => {

  const [fullname, setFullName] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()

  const dispatch = useDispatch()
  const navigate = useNavigate()


  //this is Yvonne's code:
  // async function handleSubmit(e) {
  //   e.preventDefault()
    
  //   try {
  //    await Axios.post('http://localhost:9000/register', {
  //     fullName,
  //     password,
  //     email
  //    })
  //    console.log('Registration is complete.')
  //   } 
  //   catch (e) {
  //     console.log('There was an error with your registration.')
      
  //   }
  // }


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register({fullname, email, password}, ()=>{
       navigate('/login')
    }))
  }
  return (
    <>

      <Nav />
      <div className='text-center'>
        <h2 className='font-serif italic text-emerald-900'>Register Below</h2>
  <br  />
        <div class='mx-auto max-w-2xl'>
          <form>
            <div class='group relative z-0 mb-6 w-full'>
              <input
                type='email'
                name='floating_email'
                class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                placeholder=' '
                required
              />
              <label
                for='floating_email'
                class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'>
                Email address
              </label>
            </div>
            <div class='group relative z-0 mb-6 w-full'>
              <input
                type='password'
                name='floating_password'
                id='floating_password'
                class='peer block w-full  border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                placeholder=' '
                required
              />
              <label
                for='floating_password'
                class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'>
                Password
              </label>
            </div>
            <div class='group relative z-0 mb-6 w-full'>
              <input
                type='password'
                name='repeat_password'
                id='floating_repeat_password'
                class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                placeholder=' '
                required
              />
              <label
                for='floating_repeat_password'
                class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'>
                Confirm password
              </label>
            </div>
            <div class='grid xl:grid-cols-2 xl:gap-6'>
              <div class='group relative z-0 mb-6 w-full'>
                <input
                  type='text'
                  name='floating_first_name'
                  id='floating_first_name'
                  class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                  placeholder=' '
                  required
                />
                <label
                  for='floating_first_name'
                  class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'>
                  First name
                </label>
              </div>
              <div class='group relative z-0 mb-6 w-full'>
                <input
                  type='text'
                  name='floating_last_name'
                  id='floating_last_name'
                  class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                  placeholder=' '
                  required
                />
                <label
                  for='floating_last_name'
                  class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'>
                  Last name
                </label>
              </div>
            </div>
            <div class='grid xl:grid-cols-2 xl:gap-6'>
              <div class='group relative z-0 mb-6 w-full'>
                <input
                  type='tel'
                  pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                  name='floating_phone'
                  id='floating_phone'
                  class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                  placeholder=' '
                  required
                />
             
              </div>
              
            </div>
            <button
              type='submit'
              class='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto'>
              Submit
            </button>
          </form>

          
        </div>
      </div>

    
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className='font-mono text-red-700'>Register</h1>
          <p className="font-mono">
            Once registered, you will be able to search for episodes of your favorite podcast, save episodes to listen to in the future and keep track of episodes you have already heard.  
          </p>
        </div>
        <div className="font-mono col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="register" className="text-muted mb-1">
                <small>Name</small>
              </label>
              <input
                onChange={e => setFullName(e.target.value)}
                id="fullName-register"
                name="fullName"
                className="form-control"
                type="text"
                placeholder="Enter your Name"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input
                onChange={e => setEmail(e.target.value)}
                id="email-register"
                name="email"
                className="form-control"
                type="text"
                placeholder="you@example.com"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label>
              <input
                onChange={e => setPassword(e.target.value)}
                id="password-register"
                name="password"
                className="form-control"
                type="password"
                placeholder="Create a password"
              />
            </div>
            <button
              type="submit"
              className="font-mono py-20 mt-4 btn btn-lg btn-danger btn-block"
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
