import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Pdf from '../../assets/Sanneman_Resume_Coding.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const AppNavbar = () => {

  return (
    <>
      <Navbar collapseOnSelect className='navbar-dark' expand='lg'>
        <Container fluid>
          {}
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav' >
          <Nav className='mr-auto flex-column justify-content-center flexCol'>
          <br></br>
              <br></br>
              <br></br>
              <br></br>
          <Nav.Link as={Link} to='/about' className='myBtn btnPad text-center' style={{ color: 'black', textDecoration: 'none' }} >
                About
              </Nav.Link>
              <br></br>
              <br></br>
              <Nav.Link as={Link} to='/projects' className='myBtn btnPad text-center' style={{ color: 'black', textDecoration: 'none' }}>
                Projects
              </Nav.Link>
              <br></br>
              <br></br>
              <Nav.Link as={Link} to='/music' className='myBtn btnPad text-center' style={{ color: 'black', textDecoration: 'none' }}>
                Music
              </Nav.Link>
              <br></br>
              <br></br>
              <Nav.Link as={Link} to='/resume' className='myBtn btnPad text-center' style={{ color: 'black', textDecoration: 'none' }}>
                Resume
              </Nav.Link>
              <br></br>
              <br></br>
                  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
};

export default AppNavbar;