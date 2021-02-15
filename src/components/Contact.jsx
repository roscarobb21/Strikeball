import {Row, Col, Button}  from 'reactstrap';


import './Components.css'

import React, { Component } from 'react';

class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            lang:null,
            width:null,
        }
        this.state.lang = props.props
    }
    handleResize =()=>{
        this.setState({width:window.innerWidth})
    }
    UNSAFE_componentWillMount(){
        this.setState({width:window.innerWidth})
    }
componentDidMount(){
    window.addEventListener('resize', this.handleResize)
}
componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
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
                    <Col xs="12" md="4" className="contact-text-body" style={{marginTop:'2vh', marginBottom:'2vh', paddingTop:'20px', paddingBottom:'30px'}}>
                    <Button  size="lg" className="price-button" style={{borderRadius:this.state.width>500?"66px":"66px", }}  onClick={()=>{
                      window.open('tel:069403879');
                    }}>{this.state.lang.contact.button}</Button></Col>
                                        <Col></Col>
                </Row>
            </div>
        );
    }
}


        
        

export default Contact;
