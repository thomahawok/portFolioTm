import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function MyNavBarMobil() {
  return (
    <>
      <Navbar bg="transparent">
        <Container>
          <Nav.Link href="#home">Projets</Nav.Link>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="transparent">
        <Container>
          <Nav.Link href="#link">Profils</Nav.Link>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="transparent">
        <Container>
          <Nav.Link href="#link">Contact</Nav.Link>
        </Container>
      </Navbar>
      <br />
    </>
  )
}

export default MyNavBarMobil
