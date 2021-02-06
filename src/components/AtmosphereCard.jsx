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
    render(){
        return(
            <div>
                <Container>
                <Row>
                    <Col><p id="merita-text">Iată de ce merită să încerci:</p></Col>
                </Row>
                <Row>
                    <Col  xs={{size:12, order:2}} sm={{size:12, order:2}} md={{size:12, order:2}} lg={{size:6, order:1}} style={{textAlign:'center'}} ><Image src={AtmoImg} className="card-img"/></Col>
                    <Col xs={{size:12, order:1}} sm={{size:12, order:1}} md={{size:12, order:1}} lg={{size:6, order:2}}  >
                     <p style={{ color:"#3A493D"}} className="text-card text-card-big">
                    Te scufunzi într-o atmosferă de neuitat
                        </p>
                        <p className="text-card" style={{}}>
                        STRIKEBALL e despre adrenalină! Așa ceva cu siguranță nu ai mai încercat. 
                        Îți oferim o experiență unică, care ți se va întipări 
                        în memorie pe mult timp.</p></Col>
                </Row>
                <Row style={{marginTop:'2vh'}}>
                    <Col lg={{size: 6, order:1}}><p style={{color:"#3A493D"}} className="text-card text-card-big" >Îmbini utilul cu plăcutul</p>
                    <p className="text-card" >STRIKEBALL e despre sport! Pe parcursul întregului joc nu vei sta locului nici o clipă. 
                        Nu-ți face griji – va fi atât de distractiv, 
                        încât nici nu vei observa că ai făcut mișcare, 
                        pentru o săptămână înainte.</p>
                    </Col>
                    <Col lg={{size: 6, order:2}} style={{textAlign:'center'}} ><Image src={Util} className="card-img"/></Col>
                </Row>
                <Row style={{marginTop:'2vh'}}>
                    <Col  xs={{size:12, order:2}} sm={{size:12, order:2}} md={{size:12, order:2}} lg={{size:6, order:1}} style={{textAlign:'center'}}><Image src={echipa} className="card-img"/></Col>
                    <Col xs={{size:12, order:1}} sm={{size:12, order:1}} md={{size:12, order:1}}  lg={{size:6, order:2}} >
                     <p style={{ color:"#3A493D" }} className="text-card text-card-big">
                     Dezvolți spiritul de echipă
                        </p>
                        <p className="text-card">
                        STRIKEBALL e despre lucru în echipă! Doar interacționând cu jucătorii, poți trece misiunile cu brio. Acest joc e oportunitate perfectă de a învăța să comunici efectiv și poate chiar de a te pune în locul unui lider, care va dirija întreaga acțiune.</p></Col>
                </Row>
                <Row>
                    <Col lg={{size: 6, order:1}}><p style={{color:"#3A493D"}} className="text-card text-card-big">Devii o versiune mai bună a ta</p>
                    <p className="text-card">STRIKEBALL e despre un restart! Aici îți poți descărca toate emoțiile negative, găsi răspunsurile la întrebările care nu te lasă în pace și descoperi calitățile tale ascunse.</p>
                    </Col>
                    <Col lg={{size: 6, order:2}} style={{textAlign:'center'}} ><Image src={versiune} className="card-img"/></Col>
                </Row>
                <Row>
                    <Col xs={{size:12, order:2}} sm={{size:12, order:2}} md={{size:12, order:2}} lg={{size:6, order:1}} style={{textAlign:'center'}}><Image src={prieteni} className="card-img"/></Col>
                    <Col xs={{size:12, order:1}} sm={{size:12, order:1}} md={{size:12, order:1}} lg={{size:6, order:2}}>
                     <p style={{color:"#3A493D"}} className="text-card text-card-big">
                     Îți faci prieteni noi
                        </p>
                        <p className="text-card">
                        STRIKEBALL e despre o comunitate unită! Îți garantăm că vizitând măcar un joc de-al nostru, nu vei pleca acasă fără cunoștințe noi.</p></Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default AtmosphereCard;