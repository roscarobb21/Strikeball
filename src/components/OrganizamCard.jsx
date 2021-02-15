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
        this.state={
            lang:null,
        }
        this.state.lang= props.props
    }

    render(){
        if(this.state.lang===null){
            return(null)
        }
        return(<div style={{backgroundColor:'#EDEDED', marginTop:'5vh'}}>
            <Row style={{marginTop:''}}>
                <Col md="4"></Col>
                <Col  md="4" style={{marginTop:'3vh'}}><p id="merita-text" >{this.state.lang.organize.header}</p></Col>
                <Col  md="4"></Col>
            </Row>
            <Row>
                <Col sm="0" md="2"></Col>
            <Col md="2" lg="2" style={{textAlign:'center'}}><Image src={TeamBuilding} className="organizam-img"/> <p className="organizam-text">{this.state.lang.organize.firstbody}</p></Col>
            <Col md="2" lg="2" style={{textAlign:'center'}}><Image src={Nastere} className="organizam-img"/> <p className="organizam-text">{this.state.lang.organize.secondbody}</p></Col>
            <Col md="2"  lg="2"style={{textAlign:'center'}}><Image src={Tir} className="organizam-img"/> <p className="organizam-text">{this.state.lang.organize.thirdbody}</p></Col>
            <Col md="2" lg="2" style={{textAlign:'center'}}><Image src={Petreceri} className="organizam-img"/> <p className="organizam-text">{this.state.lang.organize.fourthbody}</p></Col>
            </Row>
            <Row style={{marginTop:'4vh'}}>
                <Col md="0" lg="3"></Col>
                <Col md="12" lg="6">
                <div style={{textAlign:'center', marginTop:'1vh'}}>
                <Button outline size="lg" style={{  borderRadius: 50 , padding:'30px'}}>{this.state.lang.organize.button[0]} <span style={{whiteSpace:'nowrap'}}>{this.state.lang.organize.button[1]}</span></Button>
                <div style={{minHeight:'100px'}}>

                </div>
                </div>
                </Col>
                <Col md="0" lg="3"></Col>
            </Row>
        </div>)
    }
}

export default OrganizamCard;