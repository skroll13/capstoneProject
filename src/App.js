import "./App.css"
import React from 'react'
import pic from './assets/mohammad-metri-1oKxSKSOowE-unsplash.jpg'

function App() {
  return (
      <>
    
     {/* <h1 className='font-mono text-red-700'>Welcome to Your Podcasts</h1> */}

      <img  src={pic} value="mohammad-metri-1oKxSKSOowE-unsplash" alt="neon sign"/>
      <div>
        Photo by <a href="https://unsplash.com/@mohammadmetri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mohammad Metri</a> on <a href="https://unsplash.com/s/photos/podcast?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
     
    </>  
  );
}

export default App
