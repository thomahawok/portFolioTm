import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import ButtonSend from './ButtonSend'

function Contact() {
  return (
    <section className="featuredWork">
      <h3 className="featuredWork__title">Contact</h3>
      <Row className="g-2">
        <Col md>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 myForm"
            size="sm"
            type="email"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="Name" label="Name" className="myForm">
            <Form.Control as="textarea" placeholder="Name" />
          </FloatingLabel>
        </Col>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Comments"
          className="myForm"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
          />
        </FloatingLabel>
      </Row>
      <ButtonSend />
    </section>
  )
}

export default Contact
