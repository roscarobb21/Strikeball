import {Row, Col, Button}  from 'reactstrap';

import './Components.css'

function Contact(){
        return (
            <div>
                <Row style={{marginTop:'5vh'}}>
                    <Col>
                    <p className="price-text-header1" style={{color:'#3A493D'}} >CONTACTEAZĂ-NE</p></Col>
                </Row>
                <Row>
                    <Col ></Col>
                    <Col md="12" lg="auto">
                    <p className="price-text-header2">PETRECE O ZI DE NEUITAT CU STRIKEBALL.MD!</p></Col>
                    <Col ></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className="contact-text-body">
                    <Button color="danger" size="lg" style={{borderRadius:50, padding:'20px'}} onClick={()=>{
                      window.open('tel:069403879');
                    }}>Rezervă un joc!</Button></Col>
                                        <Col></Col>
                </Row>
            </div>
        );
        }

export default Contact;
