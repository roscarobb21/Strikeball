import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import firstSlide from '../assets/carousel/firstSlide.png';
import secondSlide from '../assets/carousel/secondSlide.png';
import thirdSlide from '../assets/carousel/thirdSlide.png';

import './Components.css';

class SlideShow extends Component {
    constructor(props){
        super(props)
        this.state={
            items:[{
                src: firstSlide,
                altText: 'Slide 1',
                header: '30.01.2021',
                key: '1',
                className:'h-100',
                captionText:'Slide 1', 
              },
              {
                src: secondSlide,
                altText: 'Slide 1',
                header: '30.01.2021',
                key: '2',
                className:'h-100',
                captionText:'Slide 2', 
              },
              {
                src: thirdSlide,
                altText: 'Slide 1',
                header: '30.01.2021',
                key: '3',
                className:'h-100',
                captionText:'Slide 3', 
              }]
        }
    }
    render() {
        return (
            <div className="h-20">
                <UncontrolledCarousel items={this.state.items} className="" captionText="OK" />
            </div>
        );
    }
}

export default SlideShow;