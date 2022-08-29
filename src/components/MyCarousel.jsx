import Carousel from 'react-bootstrap/Carousel'
import img from '../assets/projetOcr/1_Booki.png'

function MyCarousel() {
  console.log(img)
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/62ff4ea7e955d000096187f9/screenshot_2022-08-19-08-50-51-0000.png"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>RHnet</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/62cd1acd1347e44b9702d913/screenshot_2022-07-12-06-56-30-0000.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>SportSee</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://screenshot-proxy.netlify.app/f_webp,w_336/https://d33wubrfki0l68.cloudfront.net/62ff519d6dc143000870a00c/screenshot_2022-08-19-09-02-58-0000.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>ArgentBank</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default MyCarousel
