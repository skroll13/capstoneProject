import React, {useState} from "react"
import Axios from 'axios'
import Nav from '../components/layouts/Nav'

const Register = () => {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
     await Axios.post('/register', {
      username,
      password
     })
     console.log('Registration is complete.')
    } 
    catch (error) {
      console.log('There was an error with your registration.')
      
    }
  }
  return (
    <>
    <Nav />
      <div className="text-center">
        {/* <div className="col-lg-7 py-3 py-md-5"> */}
          <h2 className="display-4">Register Below</h2>
        {/* </div>     */}
      </div>     
    </>
  )

}

export default Register
