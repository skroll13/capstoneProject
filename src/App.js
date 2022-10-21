import './App.css'
import React from 'react'
import {pic1} from './components/images/pic1.jpg'

function App () {
  return (
    <>
      <div className='background-color: bg-red-400' variant='light'></div>

        <div className = "object-cover z-40 bg-fixed'" style={{backgroundImage: `url(${"/components/images/pexels-anna-tarazevich-wide.jpg"})`, backgroundRepeat:"no-repeat"}}></div>
      

    </>
  )
}

export default App

