import React from "react"
import { Link } from "react-router-dom"
// import Nav from "./Nav"

const BaseLayout = props => {
  return (
    <>
      <h1 className='font-serif italic text-red-800'>
        Welcome to your Podcast Page
      </h1>
      {/* <Nav /> */}
      <ul>
        <li className='font-serif text-gray-500'>
          <Link className='font-serif text-gray-500'to='/'>Home</Link>
        </li>
        <li className='bold font-serif text-purple-700'>
          {" "}
          <Link className='bold font-serif text-purple-700'to='/register'>Register</Link>
        </li>
        <li className='font-serif text-purple-700'>
          {" "}
          <Link to='/login'>Login</Link>
        </li>

        <li className='font-serif text-purple-700'>
          {" "}
          <Link to='/searchpodcast'>Podcast</Link>
        </li>
        <li className='font-serif text-purple-700'>
          {" "}
          <Link to='/logout'>Logout</Link>
        </li>
        {/* <li> <Link to='/deletepodcast'>Delete Podcast</Link></li> */}
        {/* <li> <Link to='/addpodcast'>Save Podcast</Link></li> */}
      </ul>

      {props.children}
    </>
  )
}

export default BaseLayout
