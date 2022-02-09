import React, {Component} from 'react';
import './Resume.css';
import PDFViewer from 'mgr-pdf-viewer-react';
import filePath from '../../assets/Sanneman_Resume_Coding.pdf';

class Resume extends Component {
    render() {
        return ( 

            <div className="App">
                <PDFViewer id="pdf"
                    document={{
                        file: filePath,
                    }}
                />
            </div>
            
        )
    }
}

export default Resume;