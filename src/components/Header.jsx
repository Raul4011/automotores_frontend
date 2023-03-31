import React from 'react'
import {Navbar,Container,Nav,} from "react-bootstrap";
import "../Css/Header.css"



const Header = () => {
  //
  return (
    <>
    
    <Navbar bg="primary" variant="dark" fixed="top" className='Logo'>
        <Container>
          <Navbar.Brand href="/" >
          <img src="https://www.planx5.com/web/sites/all/themes/alfa202001/img/comun/logo-planx5-1.png" alt="" height={50}/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className='' selected><h5>Principal</h5></Nav.Link>
            <Nav.Link href="/vehiculos"><h5>Vehiculos</h5></Nav.Link>
            <Nav.Link href="/Login"><h5>Login</h5></Nav.Link>
            <Nav.Link href="/contacto"><h5>Contactanos</h5></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header