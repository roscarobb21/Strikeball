import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import teleg from '../assets/teleg.png';
import facebook from '../assets/fb.png';
import insta from '../assets/insta.png';
import youtube from '../assets/yt.png';

import './Components.css';

class Social extends Component {
    constructor(props){
        super(props)
        this.state={
            width:null,
        }
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
                <Row className="" style={{paddingLeft:this.state.width>1300?'35px':'', paddingRight:this.state.width>1300?'15px':'15px'}} >
                <Col className="" xs="3" sm="3" md="3" lg="3" style={{textAlign:'center', paddingLeft:'15px'}}><a href="https://www.facebook.com/strikeball.md"><img className="change-cursor social-icon" alt="social" src={facebook}></img></a></Col>
                <Col className="" xs="3"  sm="3" md="3" lg="3" style={{textAlign:'center'}}><a href="https://www.instagram.com/strikeball.md"><img className="change-cursor social-icon" alt="social" src={insta}></img></a></Col>
                    <Col className="" xs="3" sm="3" md="3" lg="3" style={{textAlign:'center'}}><a href="http://t.me/joinchat/AAAAAESovXsQ8W7r7s6yyQ"><img className="change-cursor social-icon" alt="social" src={teleg}></img></a></Col>
                    <Col className="" xs="3" sm="3" md="3" lg="3" style={{textAlign:'center'}}><a href="https://www.youtube.com/channel/UCZy6BBRZVThajg9mANAWr-g/featured"><img className="change-cursor social-youtube"  alt="social" src={youtube}></img></a></Col>
                </Row>
            </div>
        );
    }
}

export default Social;