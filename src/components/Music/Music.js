import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, Row } from 'react-bootstrap';
import './Music.css';

const Music = () => {
    return (
        <div className="d-flex justify-content-center">
        
        <Container fluid className="d-flex">
            <Row className="main-panel">
            
            <iframe className="video" width="280" height="158" src="https://www.youtube.com/embed/FH_ABvoE0aM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe className="video" width="280" height="158" src="https://www.youtube.com/embed/OiQsJ4UYesI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe className="video" width="280" height="158" src="https://www.youtube.com/embed/PjLW-O5CsIA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe className="video" width="280" height="158" src="https://www.youtube.com/embed/NKx2M40tgPY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h4>I also write, mix, and produce music under the artist name Sean Dafydd. Here are a few of the songs I've written over the years, as well as a remix I did for Robert Hrutka. If you're interested in hearing more, you can find me on <a className="link" href="https://soundcloud.com/mr-mkus">soundcloud</a>.</h4>
            

            </Row>
        </Container>
        </div>
    )

}


export default Music;