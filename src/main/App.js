import React from 'react';
import './App.css';

import {Container, Row, Col} from 'reactstrap';

import Header from '../components/Header'
import AtmosphereCard from '../components/AtmosphereCard';
import OrganizamCard from '../components/OrganizamCard';
import SlideShow from '../components/SlideShow';
import Price from '../components/Price';
import Contact from '../components/Contact';
import Map from '../components/Map';
import Footer from '../components/Footer';

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <Container fluid={true}
                className="p-0">
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <Header/>
                    </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                  <AtmosphereCard/>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <OrganizamCard/>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <SlideShow/>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <Price/>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <Contact/>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <Map/>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <Footer/>
                  </Col>
                </Row>
            </Container>


        )
    }

}

export default App;
