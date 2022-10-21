import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../actions/actions'
import images from '../components/images/pexels-anna-tarazevich-wide.jpg'


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
  }

const image = () => {
  return(
    <div style={{backgroundImage: `url(${'images/pexels-anna-tarazevich-wide.jpg'})`}}>Please show up</div>
  )


  


}

  return <>


<h1>Logout</h1>





    <button
      className='my-8 font-mono py-3 mt-4 btn btn-lg btn-danger btn-block'
      onClick={userLogout}>
      </button>
  </>
}

export default Logout
