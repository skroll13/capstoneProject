import React from "react"
// import { Link } from "react-router-dom"
import Menu from './Menu'
// import Nav from "./Nav"

const BaseLayout = props => {
  return (
    <>
     <Menu  />
{/* 
      <ul>
        <li>
          {" "}
          <Link className='font-mono text-red-700' to='/'>
            {" "}
            Home
          </Link>{" "}
        </li>

        <li>
          {" "}
          <Link className='font-mono text-red-700' to='/register'>
            Register
          </Link>
        </li>

        <li>
          {" "}
          <Link className='font-mono text-red-700' to='/login'>
            Login
          </Link>
        </li>

        <li>
          {" "}
          <Link className='font-mono text-red-700' to='/searchpodcast'>
            Podcast
          </Link>
        </li>

        <li>
          {" "}
          <Link className='font-mono text-red-700' to='/customsearch'>
            Custom Search
          </Link>
        </li>

        <li>
          {" "}
          <Link className='font-mono text-red-700' to='/logout'>
            Logout
          </Link>
        </li>

        <li>
          {" "}
          <Link className='font-mono text-red-700' to='/tabs'>
            Tabs
          </Link>
        </li>
        <li>
          {" "}
          <Link className='font-mono text-red-700' to='/menu'>
            Menu
          </Link>
        </li>
      </ul> */}

      {props.children}
    </>
  )
}

export default BaseLayout
