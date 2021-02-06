import React from 'react';
import {Container, Row, Col} from 'reactstrap';

const Footer = () => {
    return (
        <div style={{backgroundColor:'#C4C4C4'}}>
            <Container>
                <Row>
                    <Col></Col>
                    <Col sm="12" md="8" lg="4"> <p style={{textAlign:'center', paddingTop:'20px'}}>strikeball.md&nbsp;|&nbsp; All rights reserved &nbsp;| 2020 </p></Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;