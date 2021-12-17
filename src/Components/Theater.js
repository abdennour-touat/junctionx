import React from "react";

import image1 from '../assets/CINEMA1.1-100.jpg'
import image2 from '../assets/cinema1.2-100.jpg'
import SimpleImageSlider from "react-simple-image-slider";
import "../App.css";

const images = [
  {
    url:
    "https://github.com/abdenour-progdes/junctionx/blob/main/src/assets/Th%C3%A9atre1%20copy%202-100.jpeg?raw=true"
  },
{
    url:"https://github.com/abdenour-progdes/junctionx/blob/main/src/assets/Th%C3%A9atre1-100.jpeg?raw=true" 
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
