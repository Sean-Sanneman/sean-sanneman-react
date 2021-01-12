import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab, Button } from 'react-bootstrap';
import './Navbar.css';

const AppNavbar = () => {

  return (
    <>
      <Navbar expand='lg'>
        <Container fluid>
          {}
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
          <Nav className='flex-column justify-content-center'>
          <br></br>
              <br></br>
              <br></br>
              <br></br>
          <Nav.Link as={Link} to='/' className='myBtn btnPad text-center' style={{ color: 'black', textDecoration: 'none' }}>
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
      {/* modal data */}
      {/* <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'
        centered>
        {/* signup/login component */}
        {/* <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal> */} 
    </>
  );
};

export default AppNavbar;