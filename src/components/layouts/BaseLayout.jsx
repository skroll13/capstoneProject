import React from "react"
import { Link } from "react-router-dom"
import Menu from './Menu'
// import Nav from "./Nav"

const BaseLayout = props => {
  return (
    <>
     <Menu  />

      {/* this is putting the Menu on every page so keep this line */}
      {props.children}
    </>
  )
}

export default BaseLayout
