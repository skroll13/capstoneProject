import React, {useState, } from "react"
// import { Link } from 'react-router-dom'
// import { authContext } from '../context/AuthContext'
import Axios from 'axios'


const Register = () => {

  const [fullName, setFullName] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    
    try {
     await Axios.post('http://localhost:9000/register', {
      fullName,
      password,
      email
     })
     console.log('Registration is complete.')
    } 
    catch (e) {
      console.log('There was an error with your registration.')
      
    }
  }
  return (
    <>
    
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
