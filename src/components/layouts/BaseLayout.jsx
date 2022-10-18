import React from "react"
import { Link } from "react-router-dom"

import Menu from './Menu'


const BaseLayout = props => {
  return (
    <>

      <h1 className='font-serif italic text-red-800'>
        Welcome to your Podcast Page
      </h1>
      <Nav />

     <Menu  />
     
      {/* this is putting the Menu on every page so keep this line */}
      {props.children}
    </>
  )
}

export default BaseLayout
