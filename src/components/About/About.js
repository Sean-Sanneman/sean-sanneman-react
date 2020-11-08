import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, Row } from 'react-bootstrap';


const About = () => {
    return (
        <div className="d-flex justify-content-center">
        
        <Container fluid className="d-flex">
            <Row className="main-panel">
                       
                <h2>ZenQuotes</h2>

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <h1><em>{quote}</em></h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p><h3>- {author}</h3></p>
                
            </Row>
        </Container>
        </div>
    )
};

export default About;