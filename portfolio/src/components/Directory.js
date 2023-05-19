import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Directory() {
  return (
    <Navbar expand="lg" sticky="top" variant="dark">
      <Container>
        <Navbar.Brand href="/about">Robert Smith</Navbar.Brand>
        <Navbar.Toggle aria-controls='directory-nav' />
        <Navbar.Collapse id='directory-nav' className='navbar-dark'>
          <Nav className='me-auto'>
            <Nav.Link href='/about'>About Me</Nav.Link>
            <Nav.Link href='/gallery'>Project Gallery</Nav.Link>
            <Nav.Link href='/work'>Work Experience</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}