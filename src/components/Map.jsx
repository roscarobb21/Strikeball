import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Image from 'react-bootstrap/Image';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Phone from '../assets/phone.png';
import Social from './Social';
import './Components.css';

class Map extends Component {
    position = [46.832350, 28.609953]
    render() {
        return (
            <div className="map-wrapper" >
              <div>&nbsp;</div>
            <div style={{marginTop:'5vh'}}>
                <Container>
                <MapContainer center={[46.832350, 28.609953]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[46.832350, 28.609953]}>
    <Popup>
    46°49'56.5"N 28°36'35.8"E
    </Popup>
  </Marker>
</MapContainer>
  </Container>
            </div>
            <div style={{color:'white', marginTop:'2vh', paddingBottom:'30px', paddingTop:'20px'}}>
               <Row >
                   <Col></Col>
                   <Col>
                   <Row style={{textAlign:'center'}}>
                       <Col md="12" lg="12" xl="4" ><span onClick={()=>{window.open('tel:069403879')}} className="change-cursor">
                        <Image src={Phone} style={{paddingBottom:'5px'}}/>
                        069403879&#160;
                        </span></Col>
                       <Col md="12" lg="12" xl="4"> <span className="change-cursor" onClick={()=>{
                          window.open('tel:069844998')
                       }}>
                        <Image src={Phone} style={{paddingBottom:'5px'}}/>
                        069844998
                        </span></Col>
                       <Col md="12" lg="12" xl="4"><span className="change-cursor" onClick={()=>{
                         window.open('mailto:strikeball@gmail.com')
                       }}>STRIKEBALL@GMAIL.COM</span></Col>
                   </Row>
                   </Col>
                   <Col></Col>
               </Row>
               <Row style={{marginTop:'4vh', marginBottom:'1vh', padding:'10px'}}>
                 <Col md="12" lg="12" xl="4"></Col>
                 <Col md="12" lg="12" xl="4" style={{textAlign:'center'}}>
               <Social/>
                 </Col>
                 <Col md="12" lg="12" xl="4"></Col>
               
               </Row>
            </div>
            </div>
        );
    }
}

export default Map;