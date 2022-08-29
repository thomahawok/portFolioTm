import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function MyNavBarDeskTop() {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <p>Projets</p>
            </Nav.Link>
            <Nav.Link href="#link">
              <p>Profils</p>
            </Nav.Link>
            <Nav.Link href="#link">
              <p>Contact</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavBarDeskTop
