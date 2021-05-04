// import React,{Component} from 'react'
// import slide1 from '../img/slide1.jpg'
// import slide2 from '../img/slide2.jpg'

// //import slideshow
// import { Carousel } from 'antd';

// const contentStyle = {
//   height: '700px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
//   width:'100%'
// };

// export default class Home extends Component{
//     render(){
//         return(
//             <Carousel style = {{width:'100%'}} autoplay>
//     <div>
//       <img style={contentStyle} src = {slide2}></img>
//     </div>
//     <div>
//     <img style={contentStyle} src = {slide1}></img>
//     </div>
//   </Carousel>
//         )
//     }

// }
import React, { useState, useEffect } from "react";
import { fetchMovies } from "../service/index";
import RBCarousel from "react-bootstrap-carousel";

export default function Home() {
  // const [nowPlaying, setNowPlaying] = useState([]);

  // useEffect(()=>{
  //   const fetchAPI = async () =>{
  //     setNowPlaying(await fetchMovies());
  //   };
  //   fetchAPI();
  // }, []);
  // const movies = nowPlaying.slice(0,5).map((item, index) =>{
  //   return(
  //     <div key = {index}>
  //       <div>
  //         <image style = {{height:600}} src = {item.backPost} alt = {item.title}/>
  //       </div>
  //     </div>
  //   )
  // })
  return (
    <div>
      <img
        src="https://images.hdqwalls.com/wallpapers/the-suicide-squad-team-5k-g4.jpg"
        alt="poster"
        style={{ width: "100%", height: "80vh", marginTop: 20 }}
      />
    </div>
  );
}
