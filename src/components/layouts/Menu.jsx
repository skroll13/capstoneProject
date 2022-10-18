import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (

      <Navbar className="background-color: bg-red-600 fixed-top" variant="light" >
        <Container>
          <Navbar.Brand className="font-mono" href="/">Your Podcasts</Navbar.Brand>
          <Nav className="font-mono">
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/searchpodcast">Search</Nav.Link>
            <Nav.Link href="/following">Following</Nav.Link>
            <Nav.Link href="/listened">Listened</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  );
}

export default Menu;