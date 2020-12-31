import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, Row } from 'react-bootstrap';
import './Projects.css';
import bookGarden from '../../assets/bookgarden_scrnsht.png';




const Projects = () => {
    return (
      <div className="d-flex justify-content-center">
        
      <Container fluid className="d-flex">

<Row className="main-panel">
<Card className="cards" style={{ width: '18rem' }}>
  <Card.Img className="bookShot" variant="top" src={bookGarden} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>




        
        
      </Row>
      </Container>
      </div>
        
        
        
        
    )
}

export default Projects;