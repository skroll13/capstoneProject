import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../actions/actions'



const Logout = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogout = () => {
    //dispatch our action to signout
    dispatch(logout(()=>{
      navigate('/login')
    }))
  }

  return (
    
    <div className = " .bg-danger .bg-lighten-lg">
      <br />
      <br />
      <br />
      <br />

       <button
        className="font-mono py-3 mt-4 btn btn-lg btn-danger btn-block text-black"
        onClick={(userLogout)}
        >
        Logout Here
      </button>
    </div>


  )
 
}

export default Logout;
