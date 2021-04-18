import React,{Component} from 'react'
import slide1 from '../img/slide1.jpg'
import slide2 from '../img/slide2.jpg'

//import slideshow
import { Carousel } from 'antd';

const contentStyle = {
  height: '700px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width:'100%'
};

export default class Home extends Component{
    render(){
        return(
            <Carousel style = {{width:'100%'}} autoplay>
    <div>
      <img style={contentStyle} src = {slide2}></img>
    </div>
    <div>
    <img style={contentStyle} src = {slide1}></img>
    </div>
  </Carousel>
        )
    }

}