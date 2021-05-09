
import { PresetColorTypes } from "antd/lib/_util/colors";
import React, { Component } from "react";
import ReactDOM, { render } from 'react-dom';

import HomeImage from "../img/home.jpg";
import slide2 from "../img/slide2.jpg";
import slide1 from '../img/slide1.jpg'
import {Carousel}from 'antd';
    
export default function Home(){
  const contentStyle = {
       height: '900px',
       color: '#fff',
       lineHeight: '160px',
       textAlign: 'center',
       background: '#364d79',
       width:'100%'
     };
    return(
      <Carousel style = {{width:'100%'}} autoplay >
          <div>
            <img style={contentStyle} src = {HomeImage} className='slide'/>
          </div>
          <div>
            <img style={contentStyle} src = {slide1} className='slide'/>
          </div>
          <div>
            <img style={contentStyle} src = {slide2} className='slide'/>
          </div>
      </Carousel>
    );


}
  