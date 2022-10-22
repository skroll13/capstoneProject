import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../actions/actions'

const Logout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogout = () => {
    //dispatch our action to signout
    dispatch(
      logout(() => {
        navigate('/login')
      })
    )}
  
  return (
    <>
    <Container className='mainFont'>
      <h1>Logout</h1>
      <br />
      <p>
        Please click the button below to logout. Once you've logged out, you'll be taken back to the login page.
      </p>
      <Button onClick={(userLogout)} variant="danger" type="submit">
      Logout
      </Button>
    </Container>
    </>
    
      // <div className='align-center'>
      // <button
      //   className="font-mono py-3 mt-4 btn btn-lg btn-danger btn-block text-black "
      //   onClick={(userLogout)}
      //   >
      //   Logout Here
      // </button>
      // </div>
      
   

  )
}  
export default Logout
