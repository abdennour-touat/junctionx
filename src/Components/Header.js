import "./Header.css";
import img from "../assets/cinema.png";
import WeatherImage from "../assets/weather.png";
import img1 from "../assets/music (1).png";
import img2 from "../assets/théatre.png";
import img3 from "../assets/art plastique.png";
import img4 from "../assets/title 1_1.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <div className="header">
        <div className="logo"></div>
        <div className="nav-links" id="navLinks">
          <ul>
            <div className="meteo-date">
              <li className="ba">
                <h3>SATURDAY</h3>
                <h6>19 December</h6>
              </li>
              <li className="temp">
                <h3 className=" font-bold  mt-9 ml-3  text-2xl">16°</h3>
                <img className="img" src={WeatherImage} alt="weather Logo" />
              </li>
            </div>
            <li className="em">
              <Link to="/Emergency">
                <button>Urgence</button>
              </Link>
            </li>
          </ul>
          <div className="titre mt-6">
            <img src={img4} alt="slogant"></img>
          </div>
          <div className="contenu">
            <Link to="/Cinema" className="rouge card">
              <img src={img} alt="hhh"></img>
              <p>Cinema</p>
            </Link>

            <Link to="/Theater" className="bleu card">
              <img src={img2} alt="photo2"></img>
              <p>Theatre</p>
            </Link>

            <Link to="Music" className="vert card">
              <img src={img1} alt="photo2"></img>
              <p>Musique</p>
            </Link>

            <br />
            <br />

            <Link to="/PlasticArt" className="blanc card">
              <img src={img3} alt="photo3"></img>
              <p>Art Plastique</p>
            </Link>

            {/* <div classNameName="fouter">HELLO</div> */}
          </div>
        </div>
      </div>
  );
};
export default Header;
