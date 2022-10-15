import React, {useState, useContext} from "react"
import { Link } from 'react-router-dom'
import { authContext } from '../context/AuthContext'
import Axios from 'axios'


const Register = () => {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
     await Axios.post('/register', {
      username,
      password
     })
     console.log('Registration is complete.')
    } 
    catch (error) {
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
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label>
              <input
                onChange={e => setUsername(e.target.value)}
                id="username-register"
                name="username"
                className="form-control"
                type="text"
                placeholder="Pick a username"
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
              className="font-mono py-3 mt-4 btn btn-lg btn-danger btn-block"
            >
              Your Podcasts
            </button>
          </form>
        </div>
      </div>
 
      
    </>
  )

}

export default Register
