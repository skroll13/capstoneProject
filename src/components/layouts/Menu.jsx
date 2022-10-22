import React, { useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Menu() {
  return (
    <>
      <Navbar bg="danger">
        <Container>
          <Navbar.Brand href="/">You Are What You Listen To</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/searchpodcast">Search</Nav.Link>
            <Nav.Link href="/listened">Podcasts You've Listened To</Nav.Link>
            <Nav.Link href="/following">Podcasts You're Following</Nav.Link>
            <Nav.Link href="/register">Create Account</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    )
}

export default Menu;

// function Menu () {
//   //if localstorage token returns, then you may access search, following, listened, logout
//   //if not, you can see register and login

//   //log in/log out requires refresh - solve second

//   const [token, setToken] = useState(localStorage.token)

 
//   useEffect(() => {
    
//     console.log();
//   }, [token])
  
  
//   return (

//     <Navbar className='background-color: bg-red-600  text-white' variant='light'>

//       <Container>
//         <Navbar.Brand className='font-serif' href='/'>
//           Your Podcasts
//         </Navbar.Brand>

//         <Nav className='justify-center font-mono antialiased text-green-800 background-color: bg-red-600 text-2xl'>

//           <div className="text-bold place-self-start">
//           <Nav.Link className='text-bold place-self-start' href='/'>YourPodcasts | </Nav.Link>
//           {loggedin}{loggedout}
          
//           {token ? 
          
//           <>
//           <Nav.Link href='/searchpodcast'>Search </Nav.Link><Nav.Link href='/following'>Following </Nav.Link>
//         <Nav.Link href='/listened'>Listened</Nav.Link>
//         <Nav.Link href='/logout'>Logout </Nav.Link>
//         </>
          
          
//           :
//           <> 
          
//             <Nav.Link href='/register'>Register</Nav.Link><Nav.Link href='/login'>Login</Nav.Link><Nav.Link href='/searchpodcast'>Search</Nav.Link>
          
//           </>
          
        
       
//         }
          
//           </div>
//         </Nav>
//       </Container>
//     </Navbar>
//   )
// }

// export default Menu


