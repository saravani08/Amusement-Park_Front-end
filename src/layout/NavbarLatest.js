import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../icons/amusementPark.jpg'

function NavbarLatest() {
  return (
    <Navbar className="nav" expand="lg">
      <Container >
        <div className='nav-text_main'>
          <Navbar.Brand href="/"><img src={logo} height='70' width='100' /></Navbar.Brand> </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-dark ">
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLatest;