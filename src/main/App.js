import React from 'react';
import './App.css';

import {Container, Row, Col} from 'reactstrap';

import AtmosphereCard from '../components/AtmosphereCard';
import OrganizamCard from '../components/OrganizamCard';
import SlideShow from '../components/SlideShow';
import Price from '../components/Price';
import Contact from '../components/Contact';
import Map from '../components/Map';
import Footer from '../components/Footer';


import Image from 'react-bootstrap/Image'
import '../components/Components.css';


import StrikeLogo from '../assets/strikeLogo.png';
import langRo from '../assets/lang-ro.json';
import langRu from '../assets/lang-ru.json';
import PhoneImg from '../assets/phone.png'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";





class Entry extends React.Component {
  constructor(props){
    super(props)
    this.state={
      lang:null,
    }
  }
  async componentWillMount(){
    let prevLang = await window.localStorage.getItem("lang");
    if(prevLang===null || prevLang===undefined){
      window.localStorage.setItem("lang", "ro");
      window.location.reload();
    }else {
      this.setState({lang:prevLang})
    }
  }
  render() {
    console.log('this.state.lang', this.state.lang)
    if(this.state.lang===null){
      return(null)
    }
    return (
      <Router>
        <Switch>
          <Route path="/ro">
            <AppRo/>
          </Route>
          <Route path="/ru">
          <AppRu/>
          </Route>
          <Route path="/" >
            {this.state.lang==="ro"?<Redirect to="/ro"></Redirect>:this.state.lang==="ru"?<Redirect to="/ru"></Redirect>:<Redirect to='/ro'></Redirect>}
          </Route>
        </Switch>
    </Router>
    );
  }
}



class AppRo extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          language:"ro"
        }
    }
    async componentWillMount(){
      let previousLang = await localStorage.getItem("lang");
      if(previousLang=== null || previousLang===undefined){
        await localStorage.setItem("lang", "ro")
        window.location.assign('/ro')
      }else {
  
      }
    }

    render() {
        return (
            <Container fluid={true}
                className="p-0">
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
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
                       <div id="language-select" onClick={()=>{
                         localStorage.setItem("lang", "ro")
                         window.location.assign('/ro')
                       } }>&#8203; RO&nbsp;</div>|<div id="language-select" onClick={()=>{
                        localStorage.setItem("lang", "ru")
                        window.location.assign('/ru')
                       }}>&nbsp;RU</div>
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
                                <p id="head-text">{langRo.header.text}</p>
                                <p id="head-subtext">{langRo.header.subtext} <span style={{display:'inline-block', textDecoration:'underline'}}>{langRo.header.underline}</span></p>
                                <p></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col sm="12" lg="3">
                                <div>
                                    <p id="head-description">
                                    {langRo.header.description}
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
                    </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                  <AtmosphereCard  props={langRo}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <OrganizamCard props={langRo}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <SlideShow props={langRo}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <Price props={langRo}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <Contact props={langRo}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <Map props={langRo}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <Footer props={langRo}/>
                  </Col>
                </Row>
            </Container>


        )
    }

}

class AppRu extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        language:"ro"
      }
  }
  async componentWillMount(){
    let previousLang = await localStorage.getItem("lang");
    if(previousLang=== null || previousLang===undefined){
      await localStorage.setItem("lang", "ro")
      window.location.assign('/ro')
    }else {

    }
  }

  render() {
    
      return (
          <Container fluid={true}
              className="p-0">
              <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
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
                     <div id="language-select" onClick={()=>{
                       localStorage.setItem("lang", "ro")
                       window.location.assign('/ro')
                     } }>&#8203; RO&nbsp;</div>|<div id="language-select" onClick={()=>{
                      localStorage.setItem("lang", "ru")
                      window.location.assign('/ru')
                     }}>&nbsp;RU</div>
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
                              <p id="head-text">{langRu.header.text}</p>
                              <p id="head-subtext">{langRu.header.subtext} <span style={{display:'inline-block', textDecoration:'underline'}}>{langRu.header.underline}</span></p>
                              <p></p>
                          </Col>
                      </Row>
                      <Row>
                          <Col></Col>
                          <Col sm="12" lg="3">
                              <div>
                                  <p id="head-description">
                                  {langRu.header.description}
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
                  </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                <AtmosphereCard  props={langRu}/>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                  <OrganizamCard props={langRu}/>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                  <SlideShow props={langRu}/>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                  <Price props={langRu}/>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                  <Contact props={langRu}/>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                  <Map props={langRu}/>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                  <Footer props={langRu}/>
                </Col>
              </Row>
          </Container>


      )
  }

}


export default Entry;