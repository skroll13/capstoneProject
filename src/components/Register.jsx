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
          <h2 className="text-emerald-900 italic font-serif">Register Below</h2>
        <div>
          <input className="input"></input>
        </div>
      </div>     
    </>
  )

}

export default Register
