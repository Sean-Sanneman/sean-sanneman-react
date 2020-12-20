import React, { useState, useEffect, Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, Row } from 'react-bootstrap';
import './Projects.css';

class MyCarousel extends Component {

    static get CARD_STYLE() {
      return {
        height: '200px',
        width: '200px',
        paddingTop: '80px',
        textAlign: 'center',
        background: '#52C0F5',
        color: '#FFF',
        fontSize: '12px',
        textTransform: 'uppercase',
        borderRadius: '10px',
      };
    }
}




const Projects = () => {
    return (
        <div className="d-flex justify-content-center">

<Container fluid className="d-flex">
            <Row className="main-panel">

            <ReactCardCarousel autoplay={ true } autoplay_speed={ 10000 }>
        <div style={ MyCarousel.CARD_STYLE }>
          First Card
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
          Second Card
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
          Third Card
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
          Fourth Card
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
          Fifth Card
        </div>
      </ReactCardCarousel>



            </Row>
        </Container>
        </div>
    )
}

export default Projects;