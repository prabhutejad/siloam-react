import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"

const Headers = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <NavLink to="/" className=" text-light text-decoration-none"><img src='2.png' height='50px' /></NavLink>
          <Nav className="">
            {/* <NavLink to="/register" className="mt-3 mx-2 text-light text-decoration-none">Register</NavLink> */}
         
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers