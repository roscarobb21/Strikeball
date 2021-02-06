import React, { Component } from 'react';
import {Container,Row, Col, Button} from 'reactstrap';


import './Components.css'
class Price extends Component {
    render() {
        return (
            <div className="price-main">
                <Container>
                    <Row>
                       <Col></Col>
                       <Col md="8"><p className="price-text-color price-text-header1">Preț</p></Col>
                       <Col></Col>
                    </Row>
                    <Row>
                       <Col></Col>
                       <Col md="8"><p className="price-text-color price-text-header2">Prețul pentru o persoană este de <span style={{color:'#FF7D7D'}}>400&nbsp;de&nbsp;lei</span> și acesta include:</p>
                       <hr style={{color:'#859A89'}}/>
                       </Col>
                       <Col></Col>
                    </Row>
                    <Row>
                       <Col></Col>
                       <Col md="8">
                    <div className="price-text-body">
                        <p>•&nbsp;REPLICA ARMEI</p>
                        <p>•&nbsp;500 DE BILE</p>
                        <p>•&nbsp;ECHIPAMENTUL DE PROTECȚIE <br></br>(MASCA, CASCA, OCHELARII, VESTA, UNIFORMA ȘI MĂNUȘILE)</p>
                        <p>•&nbsp;DIVERSE SCENARII</p>
                        <p>•&nbsp;SPAȚII SPECIAL AMENAJATE</p>
                        <p>•&nbsp;INSTRUCTAJ ȘI ASISTENȚĂ PE TOATĂ DURATA JOCULUI</p>
                    </div>
                       </Col>
                       <Col></Col>
                    </Row>
                    <Row>
                        <Col>
                        <div style={{textAlign:'center', marginTop:'1vh'}}>
                <Button outline size="lg" style={{ borderRadius: 50 , padding:'30px', color:'white'}}>* Pentru echipele mai mari de 11 persoane, prețul e de <span style={{color:'#FF7D7D'}}>350 de lei</span></Button>
                <div style={{minHeight: '100px'}}>

                </div>
                </div></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Price;