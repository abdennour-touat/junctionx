import React from "react";
import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import backbutton from "../assets/backbutton.png";
import image1 from "../assets/CINEMA1.1-100.jpg";
import images2 from "../assets/cinema1.2-100.jpg";

const images = [
  {
    url: "https://github.com/abdenour-progdes/junctionx/blob/main/src/assets/algerian%20film.png?raw=true",
  },
  {
    url: image1,
  },
  {
    url: images2,
  },
  {
    url: "https://github.com/abdenour-progdes/junctionx/blob/main/src/assets/algerian%20film%202.png?raw=true",
  },
];

const Cinema = () => {
  return (
    <div>
      <Link to="/">
        <img
          className=" p-4 fixed top-0 left-0 z-20    h-16 w-16"
          src={backbutton}
          alt="backbutton"
        />
      </Link>
      <SimpleImageSlider
        width="100%"
        height="100%"
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default Cinema;
