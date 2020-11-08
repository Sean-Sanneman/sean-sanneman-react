import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
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
                <Col xs={11} className="col-xs-offset-3">
                  <Switch>
                    <Route exact path='/' component={About} />
                    {/* <Route exact path='/diary' component={Diary} />
                    <Route exact path='/goals' component={Goals} />
                    <Route exact path='/messages' component={Messages} />
                    <Route exact path='/contact' component={Contact} /> */}
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

