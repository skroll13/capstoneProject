import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const BaseLayout = (props) => {
  return (
    <>
    
    <h1 className = "display-1">Welcome to your Podcast Page</h1>
    <Nav />
    <ul>
      <li> <Link to='/'>Home</Link></li>
      <li> <Link to='/register'>Register</Link></li>
      <li> <Link to='/login'>Login</Link></li>
      <li> <Link to='/logout'>Logout</Link></li>
      <li> <Link to='/addpodcast'>Save Podcast</Link></li>
      <li> <Link to='/searchpodcast'>Search for a Podcast</Link></li>
      <li> <Link to='/deletepodcast'>Delete Podcast</Link></li>
    </ul>

    {props.children }
    
    </>
  )
}

export default BaseLayout