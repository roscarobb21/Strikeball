import React from 'react';
import {Row, Col} from 'reactstrap';
import Image from 'react-bootstrap/Image'
import './Components.css'


import StrikeLogo from '../assets/strikeLogo.png';
import PhoneImg from '../assets/phone.png'
class Header extends React.Component {
   
    render() {
        return (
            <div className="header-main">
                <Row>
                    <Col sm="12" md="12" lg="0" xl="1" className="text-style">
                       <a href="/"> <Image src={StrikeLogo}
                            id="strike-logo"/></a>
                    </Col>
                    <Col sm="0" md="0" lg="12" xl="7"></Col>
                    <Col sm="12" md="12" lg="12"  xl="4" id="phone-group" className="text-style" >
                    <div style={{display:'inline'}} >
                        
                        <Image src={PhoneImg}/>
                        069403879&#160;

                        <Image src={PhoneImg}/>
                        &nbsp;
                        069844998
                        &nbsp;
                        STRIKEBALL@GMAIL.COM 
                       <div id="language-select" onClick={()=>{} }>&#8203; RO&nbsp;</div>|<div id="language-select" onClick={()=>{}}>&nbsp;RU</div>
                        </div>
                    </Col>
                </Row>
                <Row style={
                    {marginTop: '4%'}
                }>
                    <Col></Col>
                    <Col lg="auto">
                        <Row>
                            <Col></Col>
                            <Col xs="12" sm="12" md="12">
                                <p id="head-text">Îți place odihna activă?</p>
                                <p id="head-subtext">Te invităm să încerci <span style={{display:'inline-block', textDecoration:'underline'}}>STRIKEBALL!</span></p>

                                <p></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col sm="12" lg="3">
                                <div>
                                    <p id="head-description">
                                        O activitate sportivă în care participanții trec jocuri, precum Counter-Strike, Escape from Tarkov, Call of Duty în realitate. 
                                                Tu și echipa ta veți efectua anumite misiuni, 
                                                cu ajutorul unor replici de arme, ce lansează proiectile sferice de plastic, 
                                                utilizând echipamente specifice cu cele din joc.
                                    </p>
                                </div>
                                <div className="space"></div>
                            </Col>
                            <Col></Col>
                        </Row>

                    </Col>
                    <Col></Col>
                </Row>
            </div>
        )
    }
}


export default Header;


/**
 *   <div style={{display:'inline'}} >
                        
                        <Image src={PhoneImg}/>
                        069403879&#160;

                        <Image src={PhoneImg}/>
                        &nbsp;
                        069844998
                        &nbsp;
                        STRIKEBALL@GMAIL.COM 
                       <div id="language-select" onClick={()=>{} }>&#8203; RO&nbsp;</div>|<div id="language-select" onClick={()=>{}}>&nbsp;RU</div>
                        </div>
 */