import React from 'react'
import { Container,Nav,Navbar } from 'react-bootstrap'

function NavComponent() {

  return (
    <>
    
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Photo Gallery</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
              

          </Nav>
        </Container>
      </Navbar>
    </> 
  )
}

export default NavComponent