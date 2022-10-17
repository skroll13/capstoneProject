import React, {useState } from "react"
import Axios from 'axios'

const Login = () => {
  
  const [fullName] = useState()
  const [password] = useState()
  const [email] = useState()
  
     async function handleSubmit(e) {
    e.preventDefault()
    try {
     await Axios.post('/register', {
      fullName,
      password,
      email
     })
     console.log('Registration is complete.')
    } 
    catch (error) {
      console.log('There was an error with your registration.')
      
    }
    return(
   <>
    <div className="font-mono col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="register" className="text-muted mb-1">
                <small>Name</small>
              </label>
              <input
                // onChange={e => setFullName(e.target.value)}
                id="fullName-register"
                name="Name"
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
                // onChange={e => setEmail(e.target.value)}
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
                // onChange={e => setPassword(e.target.value)}
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
  </>
  )
}
}
export default Login
