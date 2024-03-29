import React, { useState, useEffect } from 'react';
import { Container, Button, Card, Row } from 'react-bootstrap';
import './Projects.css';
import bookGarden from '../../assets/bookgarden_scrnsht.png';
import collab from '../../assets/collab_scrsht.jpg';
import future from '../../assets/future_scrsht.jpg';




const Projects = () => {
    return (
      <div className="d-flex justify-content-center">
        
      <Container fluid className="d-flex">

<Row className="main-panel">
<Card className="cards" style={{ width: '100%' }}>
<a href="https://wicked-ghoul-96440.herokuapp.com/" target="_blank">
  <Card.Img className="bookShot" variant="top" src={future} />
  </a>
  <Card.Body>
    <Card.Title>Future RAM</Card.Title>
    <Card.Text>
    Future RAM is a life planner app. Users can log-on, get inspiration for the day, set goals, and keep a digital diary for future reference. This website is currently under development.
    </Card.Text>
    <Button href="https://github.com/Sean-Sanneman/future-ram" target="_blank" className="linkButton" variant="primary">GitHub</Button>
  </Card.Body>
</Card>

<Card className="cards" style={{ width: '100%' }}>
<a href="https://jason-ahmed-123.github.io/groupproject1-book-garden/" target="_blank">
  <Card.Img className="bookShot" variant="top" src={bookGarden} />
  </a>
  <Card.Body>
    <Card.Title>Book Garden</Card.Title>
    <Card.Text>
      Book Garden is a website where users can search for book suggestions based on their preferences. Book Garden will eventually become a social networking platform for bookworms. 
    </Card.Text>
    <Button href="https://github.com/Jason-Ahmed-123/groupproject1-book-garden" target="_blank" className="linkButton" variant="primary">GitHub</Button>
  </Card.Body>
</Card>

<Card className="cards" style={{ width: '100%' }}>
<a href="https://immense-wave-96747.herokuapp.com/" target="_blank">
  <Card.Img className="bookShot" variant="top" src={collab} />
  </a>
  <Card.Body>
    <Card.Title>Collab</Card.Title>
    <Card.Text>
    Welcome to the Musicians Collaborative Laboratory! Collab was my second project in bootcamp. Collab is now being developed under another name, and will be a website aimed at helping people find other musicians to collaborate with remotely. Users will be able to set up an account, and create a network of musicians based on instruments and genres to work on projects with online.
    </Card.Text>
    <Button href="https://github.com/Sean-Sanneman/collab" target="_blank" className="linkButton" variant="primary">GitHub</Button>
  </Card.Body>
</Card>




        
        
      </Row>
      </Container>
      </div>
        
        
        
        
    )
}

export default Projects;