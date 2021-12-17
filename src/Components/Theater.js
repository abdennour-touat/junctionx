import React from "react";

import image1 from '../assets/CINEMA1.1-100.jpg'
import image2 from '../assets/cinema1.2-100.jpg'
import SimpleImageSlider from "react-simple-image-slider";
import "../App.css";

const images = [
  {
    url:
    "https://raw.githubusercontent.com/abdenour-progdes/junctionx/main/src/assets/CINEMA1.1-100.jpg"
  },
{
    url:"https://raw.githubusercontent.com/abdenour-progdes/junctionx/main/src/assets/cinema1.2-100.jpg" 
}
];

const Theater = () => {
 return(
     <div>
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

export default Theater;
