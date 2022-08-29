import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import MyOffcanvas from './MyOffCanva'
import Presentation from './Presentation'
import Container from 'react-bootstrap/Container'

import { ReactComponent as Logo } from '../assets/f25c.svg'

function Header() {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  console.log(myRef)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff004f,
          points: 15.0,
          maxDistance: 28.0,
          spacing: 20.0,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <header ref={myRef} className="header" id="#vanta-bg">
      <Container fluid>
        >
        <MyOffcanvas />
        <div className="row text-center">
          <Presentation />
        </div>
      </Container>
    </header>
  )
}

export default Header
