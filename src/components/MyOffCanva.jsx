import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { ReactComponent as Logo } from '../assets/f25c.svg'

function MyOffCanva() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="transparent" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <Logo alt="" width="90" height="70" className="header__logo " />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              variant="white"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Projets</Nav.Link>
                  <Nav.Link href="#action2">Profiles</Nav.Link>
                  <Nav.Link href="#action2">Contacte</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default MyOffCanva
