import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../actions/actions'
import pic2 from './images/pic2.jpg'

const Logout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogout = () => {
    //dispatch our action to signout
    dispatch(
      logout(() => {
        navigate('/login')
      })
    )
  
  return (

    <>
      <div className='z-30'>
        <img
          className='image-fluid justify-content-center'
          src={pic2}
          value='anna_tarazevich'
          alt='Listen to a podcastn'
        />
      </div>




       <button
        className="font-mono py-3 mt-4 btn btn-lg btn-danger btn-block text-black"
        onClick={(userLogout)}
        >
        Logout Here
      </button>
 

    </>

  )
} }  
export default Logout
