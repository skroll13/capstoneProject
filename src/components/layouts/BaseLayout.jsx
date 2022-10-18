import React from "react"


import Menu from './Menu'


const BaseLayout = props => {
  return (
    <>
     <Menu  />

      {props.children}
    </>
  )
}

export default BaseLayout
