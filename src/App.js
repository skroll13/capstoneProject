import "./App.css"
import React from 'react'
import pic from './assets/mohammad-metri-1oKxSKSOowE-unsplash.jpg'

function App() {
  return (
      <>
      <br />
      <img src={pic} value="mohammad-metri-1oKxSKSOowE-unsplash"/>
      <div className="text-red-600 font-mono .625rem">
        Photo by <a  href="https://unsplash.com/@mohammadmetri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mohammad Metri</a> on <a href="https://unsplash.com/s/photos/podcast?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
    </>  
  );
}

export default App
