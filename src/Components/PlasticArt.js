import React from "react";
import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import "../App.css";
import backbutton from '../assets/backbutton.png'

const images = [
  {
    url:
    "https://github.com/abdenour-progdes/junctionx/blob/main/src/assets/musique%202-100.jpeg?raw=true"
  },
{
    url:"https://github.com/abdenour-progdes/junctionx/blob/main/src/assets/musique%202-100.jpeg?raw=true" 
}
];

const PlasticArt = () => {
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

export default PlasticArt;
