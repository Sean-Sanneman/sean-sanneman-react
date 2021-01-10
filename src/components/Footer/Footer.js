import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, Row } from 'react-bootstrap';

// These imports will need to be revised - they are being pulled over from the book search project



import '../../index.css';

import Auth from '../../utils/helpers';


const Footer = () => {

return (

// 2-Column Footer
    <div className="page-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <h6 className="text-uppercase font-weight-bold">Additional Information</h6>
                    <p>
                    <a className="link" href="https://www.linkedin.com/in/sean-sanneman-b99274158">LinkedIn</a>
                    <br></br>
                    <a className="link" href="https://github.com/Sean-Sanneman">GitHub</a>
                    </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h6 className="text-uppercase font-weight-bold">Contact</h6>
                    <p>Burbank, California
                        <br></br>
                    <a className="link" href="mailto:seandafydd@gmail.com">seandafydd@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-copyright text-center">© 2020 - Sean Sanneman</div>
        </div>
    </div>

);
};

export default Footer;