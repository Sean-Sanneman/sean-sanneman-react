import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, Row } from 'react-bootstrap';
import './About.css';
import myPhoto from "../../assets/Profile_cropped.jpg";


const About = () => {
    return (
        <div className="d-flex justify-content-center">
        
        <Container fluid className="d-flex">
            <Row className="main-panel">
                       
            <h2 className="header">About Me</h2>

                <br></br>
                <div class="flex-container">
                <div class="flex-child-left">
                    <img src={myPhoto} className="photo" style={{ width: "75%"}} alt="myPhoto" />
                    </div>
                    <div class="flex-row hero flex-child-right" style={{ width: "100%"}}>
                        <h5 class="aboutMeText">
                I am a full-Stack Web Developer with a background in audio engineering, and a passion for innovation and forward thinking design. I effectively combine creativity and problem solving to develop applications that bring something a little extra to the mix. I am known for being adept at seeing the big picture while maintaining a detail-oriented approach to anything I am working on. Should you find yourself needing someone to handle audio and video content on top of any coding required, I am able to do that as well. 
                </h5>
                </div>
                </div>

                <h1><em></em></h1>
                <br></br>
                <br></br>
                
                
                <p><h3></h3></p>
                
            </Row>
        </Container>
        </div>
    )
};

export default About;