import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';


import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Projects from "./components/Projects/Projects";
import Footer from './components/Footer/Footer';
import Music from './components/Music/Music';
import Resume from './components/Resume/Resume';
import { Container, Row, Col } from 'react-bootstrap';



function App() {
  return (
      <Router>
        <section>
          <div>

            <Row>
              <Col xs={12}>
                <Banner />
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <Navbar />
              </Col>
              <Container>
                <Col xs={12} className="col-xs-offset-3">
                  <Switch>
                    <Route exact path='/projects' component={Projects} />
                    <Route exact path='/music' component={Music} />
                    <Route exact path='/resume' component={Resume} />
                    <Route exact path='*' component={About} />
                  </Switch>
                </Col>
              </Container>
            </Row>

            <Row>
              <Col xs={12}>
                <Footer />
              </Col>
            </Row>

          </div>
        </section>
      </Router>
  );
};

export default App;

