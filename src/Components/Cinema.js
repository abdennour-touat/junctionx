import React from "react";

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

const Cinema = () => {
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

export default Cinema;
