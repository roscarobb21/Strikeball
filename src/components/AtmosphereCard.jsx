import React from 'react';

import {Row, Col, Container} from 'reactstrap';
import Image from 'react-bootstrap/Image';
import AtmoImg from '../assets/atmoImg.png';
import Util from '../assets/util.png';
import echipa from '../assets/echipa.png';
import versiune from '../assets/versiune.png';
import prieteni from '../assets/prieteni.png';


import './Components.css'
class AtmosphereCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            width:null,
            lang:null,
        } 
        this.state.lang= props.props
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
    render(){
       
        if(this.state.lang===null){
            return(null)
        }
        return(
            
            <div>
                <Container>
                    {this.state.lang.atmosphere.merita==="Iată de ce merită să încerci:"&& 
                <Row>
                    <Col></Col>
                    <Col md="12" lg="12"><p id="merita-text">{this.state.lang.atmosphere.merita}</p></Col>
                    <Col></Col>
                </Row>
                   }
                <Row>
                    <Col  xs={{size:12, order:2}} sm={{size:12, order:2}} md={{size:12, order:2}} lg={{size:6, order:1}} style={{textAlign:'center'}} ><Image src={AtmoImg} className="card-img"/></Col>
                    <Col xs={{size:12, order:1}} sm={{size:12, order:1}} md={{size:12, order:1}} lg={{size:6, order:2}}>
                        <div className="" style={{height:'100%'}}>
                     <p style={{ color:"#3A493D"}} className="text-card text-card-big">
                    {this.state.lang.atmosphere.firstCardHeader}
                        </p>
                        <p className="text-card" style={{}}>
                       {this.state.lang.atmosphere.firstCardBody}</p>
                       </div>
                       </Col>
                </Row>
                <Row style={{marginTop:'3vh'}}>
                    <Col lg={{size: 6, order:1}}>
                    <div >
                        <p style={{color:"#3A493D"}} className="text-card text-card-big" >
                        {this.state.lang.atmosphere.secondCardHeader}</p>
                    <p className="text-card" >{this.state.lang.atmosphere.secondCardBody}</p>
                    </div>
                    </Col>
                    <Col lg={{size: 6, order:2}} style={{textAlign:'center'}} ><Image src={Util} className="card-img"/></Col>
                </Row>
                <Row style={{marginTop:'3vh'}}>
                    <Col  xs={{size:12, order:2}} sm={{size:12, order:2}} md={{size:12, order:2}} lg={{size:6, order:1}} style={{textAlign:'center'}}><Image src={echipa} className="card-img"/></Col>
                    <Col xs={{size:12, order:1}} sm={{size:12, order:1}} md={{size:12, order:1}}  lg={{size:6, order:2}} >
                     <p style={{ color:"#3A493D" }} className="text-card text-card-big">
                     {this.state.lang.atmosphere.thirdCardHeader}
                        </p>
                        <p className="text-card">{this.state.lang.atmosphere.thirdCardBody}
                        </p></Col>
                </Row>
                <Row style={{marginTop:'3vh'}}>
                    <Col lg={{size: 6, order:1}}><p style={{color:"#3A493D"}} className="text-card text-card-big">{this.state.lang.atmosphere.fourthCardHeader}</p>
                    <p className="text-card">{this.state.lang.atmosphere.fourthCardBody}</p>
                    </Col>
                    <Col lg={{size: 6, order:2}} style={{textAlign:'center'}} ><Image src={versiune} className="card-img"/></Col>
                </Row>
                <Row style={{marginTop:'3vh'}}>
                    <Col xs={{size:12, order:2}} sm={{size:12, order:2}} md={{size:12, order:2}} lg={{size:6, order:1}} style={{textAlign:'center'}}><Image src={prieteni} className="card-img"/></Col>
                    <Col xs={{size:12, order:1}} sm={{size:12, order:1}} md={{size:12, order:1}} lg={{size:6, order:2}}>
                     <p style={{color:"#3A493D"}} className="text-card text-card-big">
                    {this.state.lang.atmosphere.fifthCardHeader}
                        </p>
                        <p className="text-card">
                        {this.state.lang.atmosphere.fifthCardBody}
                        </p></Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default AtmosphereCard;