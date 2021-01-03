import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, Row } from 'react-bootstrap';
import './Projects.css';
import bookGarden from '../../assets/bookgarden_scrnsht.png';
import collab from '../../assets/collab_scrsht.jpg';
import future from '../../assets/future_scrsht.jpg';




const Projects = () => {
    return (
      <div className="d-flex justify-content-center">
        
      <Container fluid className="d-flex">

<Row className="main-panel">
<Card className="cards" style={{ width: '20rem' }}>
  <Card.Img className="bookShot" variant="top" src={future} />
  <Card.Body>
    <Card.Title>Future RAM</Card.Title>
    <Card.Text>
    Future RAM is a life planner app. Users can log-on, get inspiration for the day, set goals, and keep a digital diary for future reference. This website is currently under development.
    </Card.Text>
    <Button href="https://wicked-ghoul-96440.herokuapp.com/" target="_blank" className="linkButton" variant="primary">Visit Site</Button>
  </Card.Body>
</Card>

<Card className="cards" style={{ width: '20rem' }}>
  <Card.Img className="bookShot" variant="top" src={bookGarden} />
  <Card.Body>
    <Card.Title>Book Garden</Card.Title>
    <Card.Text>
      Book Garden is a website where users can search for random book suggestions based on their preferences. Book Garden will eventually become a social networking platform for bookworms. 
    </Card.Text>
    <Button href="https://jason-ahmed-123.github.io/groupproject1-book-garden/" target="_blank" className="linkButton" variant="primary">Visit Site</Button>
  </Card.Body>
</Card>

<Card className="cards" style={{ width: '20rem' }}>
  <Card.Img className="bookShot" variant="top" src={collab} />
  <Card.Body>
    <Card.Title>Collab</Card.Title>
    <Card.Text>
    Welcome to the Musicians Collaborative Laboratory! Collab is a website being developed to help musicians find other musicians to collaborate with remotely. Musicians will be able to create an account, and look for other musicians based on instruments and genres.
    </Card.Text>
    <Button href="https://immense-wave-96747.herokuapp.com/" target="_blank" className="linkButton" variant="primary">Visit Site</Button>
  </Card.Body>
</Card>




        
        
      </Row>
      </Container>
      </div>
        
        
        
        
    )
}

export default Projects;