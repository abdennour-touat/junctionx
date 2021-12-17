import React from "react";
import gucci from '../assets/cinéma backround-100.jpeg'

import SimpleImageSlider from "react-simple-image-slider";
import "../App.css";

const images = [
  {
    url:
    gucci
  },
];

console.log(gucci)
const App = () => {
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

export default App;
