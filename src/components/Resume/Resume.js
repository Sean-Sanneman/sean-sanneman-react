import React, { component } from 'react';
import { Component } from 'react';
import Pdf from '../../assets/Sanneman_Resume_Coding.pdf';
import './Resume.css';

class Resume extends Component {
    render() {

        return (
            <div className="App">
                <a href = {Pdf} target = "_blank" style={{ color: 'seashell', textDecoration: 'none' }}><h2><br></br>Download</h2></a>
            </div>
        )
    }
}

export default Resume;
