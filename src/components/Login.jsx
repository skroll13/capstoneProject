import React, {useState } from "react"
import { Link } from "react-router-dom";  //this will be used if we link out to the registration page
import Axios from 'axios'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from "../actions/actions"; 

const Login = () => {

  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(login({email, password}, ()=>{
      navigate('/SearchPodcast')
    }))
  }
  
  //    async function handleSubmit(e) {
  //   e.preventDefault()
  //   try {
  //    await Axios.post('/register', {
  //     fullName,
  //     password,
  //     email
  //    })
  //    console.log('Registration is complete.')
  //   } 
  //   catch (error) {
  //     console.log('There was an error with your registration.')
      
  //   }
    // return (
    //     <>
    //     <form>
    //         <div className="row align-items-center">
    //           <div className="col-lg-7 py-3 py-md-5">
    //             <h1 className="font-mono text-red-700">Login</h1>
    //           </div>
    //         </div>
            
    //         {/* <div className="font-mono col-lg-7 pl-lg-10 pb-10 py-lg-50"> */}
    //         <div className="font-mono max-width mx-auto">
    //         {/* <div className="font-mono row align-items-center"> */}
    //           <div className="form-group">
    //               <label htmlFor="email-register" className="text-muted mb-1">
    //               <small>Email</small>
    //               </label>
    //               <input
    //                 // onChange={e => setEmail(e.target.value)}
    //                 id="email-register"
    //                 name="email"
    //                 className="form-control"
    //                 type="text"
    //                 placeholder="you@example.com"
    //                 autoComplete="off"/>
    //           </div>

    //          <div className="form-group">
    //             <label htmlFor="password-register" className="text-muted mb-1">
    //             <br  />
    //             <br  />
    //             <small>Password</small>
    //             </label>
    //             <input
    //             // onChange={e => setPassword(e.target.value)}
    //             id="password-register"
    //             name="password"
    //             className="form-control"
    //             type="password"
    //             placeholder="Enter Password"/>
    //         </div>
    //         <br  />
    //         <button
    //           type="submit"
    //           className="text-xsm font-mono text-black btn btn-large btn-danger btn-rounded">
    //          Submit
    //         </button>
    //         </div>
    //         </form>

    //     </>

    // )
  
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/



  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-2xl font-mono tracking-tight text-gray-900">
              Log into your account
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <input 
            type="hidden"
            name="remember" 
            defaultValue="true" 
            />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Email address"
                  onChange={e=>setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-400 focus:outline-none focus:ring-red-400 sm:text-sm"
                  placeholder="Password"
                  onChange={e=>setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center"> 
            </div>

            
              
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-md   font-xlarge text-bold-black hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2"
              >
              
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}








// }
export default Login;
