import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import './Components.css';

import Image from 'react-bootstrap/Image'
import TeamBuilding from '../assets/teamBuilding.png';
import Nastere from '../assets/nastere.png';
import Tir from '../assets/tir.png';
import Petreceri from '../assets/petreceri.png';

import './Components.css';

class OrganizamCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div style={{backgroundColor:'#EDEDED'}}>
            <Row>
                <Col md="4"></Col>
                <Col  md="4"><p id="merita-text">ORGANIZĂM:</p></Col>
                <Col  md="4"></Col>
            </Row>
            <Row>
                <Col sm="0" md="2"></Col>
            <Col md="2" lg="2" style={{textAlign:'center'}}><Image src={TeamBuilding} className="organizam-img"/> <p className="organizam-text">TEAM BUILDING</p></Col>
            <Col md="2" lg="2" style={{textAlign:'center'}}><Image src={Nastere} className="organizam-img"/> <p className="organizam-text">ZILE DE NAȘTERE</p></Col>
            <Col md="2"  lg="2"style={{textAlign:'center'}}><Image src={Tir} className="organizam-img"/> <p className="organizam-text">TIR</p></Col>
            <Col md="2" lg="2" style={{textAlign:'center'}}><Image src={Petreceri} className="organizam-img"/> <p className="organizam-text">PETRECERI TEMATICE</p></Col>
            </Row>
            <Row style={{marginTop:'4vh'}}>
                <Col md="0" lg="4"></Col>
                <Col md="12" lg="4">
                <div style={{textAlign:'center', marginTop:'1vh'}}>
                <Button outline size="lg" style={{ borderRadius: 50 , padding:'30px'}}>+ OFERIM ECHIPAMENTE ÎN ARENDĂ (FOTO/VIDEO/EVENIMENTE)</Button>
                <div style={{minHeight:'100px'}}>

                </div>
                </div>
                </Col>
                <Col md="0" lg="4"></Col>
            </Row>
        </div>)
    }
}

export default OrganizamCard;