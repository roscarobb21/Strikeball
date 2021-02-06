import {Row, Col, Button}  from 'reactstrap';


import './Components.css'

import React, { Component } from 'react';

class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            lang:null
        }
        this.state.lang = props.props
    }
    render() {
        return (
            <div>
                <Row style={{marginTop:'5vh'}}>
                    <Col>
                    <p className="price-text-header1" style={{color:'#3A493D'}} >{this.state.lang.contact.header}</p></Col>
                </Row>
                <Row>
                    <Col ></Col>
                    <Col md="12" lg="auto">
                    <p className="price-text-header2">{this.state.lang.contact.subheader}</p></Col>
                    <Col ></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className="contact-text-body">
                    <Button color="danger" size="lg" style={{borderRadius:50, padding:'20px'}} onClick={()=>{
                      window.open('tel:069403879');
                    }}>{this.state.lang.contact.button}</Button></Col>
                                        <Col></Col>
                </Row>
            </div>
        );
    }
}


        
        

export default Contact;
