import ListGroup from 'react-bootstrap/ListGroup'
import Slide from '../utils/Slide'

function Tecno() {
  Slide()
  return (
    <section className="featuredWork">
      <h3 className="featuredWork__title">Languages, & Tools</h3>
      <article>
        <h4>Front-End</h4>
        <p>
          Création et intégration de sites web et applications mobiles
          responsive, accessibles et répondant aux normes W3C.
        </p>
        <ListGroup key="sm" horizontal="sm" className="my-2">
          <ListGroup.Item className="technos1">HTML5</ListGroup.Item>
          <ListGroup.Item className="technos2">CSS3</ListGroup.Item>
          <ListGroup.Item className="technos3">Sass</ListGroup.Item>
          <ListGroup.Item className="technos4">React</ListGroup.Item>
          <ListGroup.Item className="technos5">Redux</ListGroup.Item>
          <ListGroup.Item className="technos6">Javascript</ListGroup.Item>
          <ListGroup.Item className="technos7">Bootstrap</ListGroup.Item>
          <ListGroup.Item className="technos8">Git</ListGroup.Item>
          <ListGroup.Item className="technos9">Github</ListGroup.Item>
        </ListGroup>
      </article>
    </section>
  )
}

export default Tecno
