import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Image from 'react-bootstrap/Image';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Phone from '../assets/phone.png';
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
      A pretty CSS3 popup. <br /> Easily customizable.
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
                       <Col md="12" lg="12" xl="4" ><span style={{textAlign:'center'}}><Image src={Phone}/>&nbsp;069403879&nbsp;</span></Col>
                       <Col md="12" lg="12" xl="4"><Image src={Phone}/>&nbsp;069844998</Col>
                       <Col md="12" lg="12" xl="4">STRIKEBALL@GMAIL.COM</Col>
                   </Row>
                   </Col>
                   <Col></Col>
               </Row>
            </div>
            </div>
        );
    }
}

export default Map;