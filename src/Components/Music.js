import React from "react";
import {Link} from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
import "../App.css";
import backbutton from '../assets/backbutton.png'
import image1 from '../assets/musique 1-100.jpeg'
import image2 from '../assets/musique 2-100.jpeg'
const images = [
  {
    url:
    "https://github.com/abdenour-progdes/junctionx/blob/main/src/assets/musique%201-100.jpeg?raw=true"
  },
{
    url:"https://github.com/abdenour-progdes/junctionx/blob/main/src/assets/musique%201-100.jpeg?raw=true"
}
];

const Music = () => {
 return(
     <div>
         <Link to="/">
         <img className= " p-4 fixed top-0 left-0 z-20    h-16 w-16" src={backbutton} alt="backbutton"/>
         </Link>
         <SimpleImageSlider
        width='100%'
        height='100%'
        images={images}
        showBullets={true}
        showNavs={true}
      />
     </div>
 ); 
};

export default Music;
