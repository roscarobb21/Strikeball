import React, { Component } from 'react';
import {Container,Row, Col, Button} from 'reactstrap';

import './Components.css'

class Price extends Component {
    constructor(props){
        super(props)
        this.state={
            lang:null
        }
        this.state.lang= props.props
    }
    render() {
        return (
            <div className="price-main">
                <Container>
                    <Row>
                       <Col></Col>
                       <Col md="8"><p className="price-text-color price-text-header1">{this.state.lang.price.header}</p></Col>
                       <Col></Col>
                    </Row>
                    <Row>
                       <Col></Col>
                       <Col md="8"><p className="price-text-color price-text-header2">{this.state.lang.price.body[0]}<span style={{color:'#FF7D7D', whiteSpace:'pre'}}>{this.state.lang.price.body[1]}</span>{this.state.lang.price.body[2]} </p>
                       <hr style={{color:'#859A89'}}/>
                       </Col>
                       <Col></Col>
                    </Row>
                    <Row>
                       <Col></Col>
                       <Col md="8">
                    <div className="price-text-body">
                        <p>•&nbsp;{this.state.lang.price.items[0]}</p>
                        <p>•&nbsp;{this.state.lang.price.items[1]}</p>
                        <p>•&nbsp;{this.state.lang.price.items[2]} <br></br><span className="price-text-subbody">{this.state.lang.price.items[3]}</span></p>
                        <p>•&nbsp;{this.state.lang.price.items[4]}</p>
                        <p>•&nbsp;{this.state.lang.price.items[5]}</p>
                        <p>•&nbsp;{this.state.lang.price.items[6]}</p>
                    </div>
                       </Col>
                       <Col></Col>
                    </Row>
                    <Row>
                        <Col>
                        <div style={{textAlign:'center', marginTop:'1vh'}}>
                <Button outline size="lg" style={{ borderRadius: 55 , padding:'20px', color:'white'}}> {this.state.lang.price.button[0]}<span style={{color:'#FF7D7D'}}>{this.state.lang.price.button[1]}</span></Button>
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