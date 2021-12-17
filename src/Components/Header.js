import "./Header.css";
import img from "../assets/cinema.png";
import WeatherImage from "../assets/weather.png";
import img1 from "../assets/music (1).png";
import img2 from "../assets/théatre.png";
import img3 from "../assets/art plastique.png";
import img4 from "../assets/Artboard 28.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo"></div>
        <div className="nav-links" id="navLinks">
          <ul>
            <div className="meteo-date">
              <li className="ba">
                <h3>SATURDAY</h3>
                <h6>19 December</h6>
              </li>
              <li>
                <img className="img" src={WeatherImage} alt="weather Logo" />
              </li>
            </div>
            <li className="em">
              <button>Urgence</button>
            </li>
          </ul>
          <div className="titre">
            <img src={img4} alt="slogant"></img>
          </div>
          <div className="contenu">
            <Link to="/Cinema">
              <div className="rouge card">
                <img src={img} alt="hhh"></img>
                <p>Cinema</p>
              </div>
            </Link>
            <Link to="/Theater">
              <motion.div
                animate={{ x: 100 }}
                className="bleu card"
              >
                <img src={img2} alt="photo2"></img>Theatre
              </motion.div>
            </Link>
            <Link to="Music">
              <div className="vert card">
                <img src={img1} alt="photo"></img>Musique
              </div>
            </Link>
            <br />
            <br />
            <Link to="/PlasticArt">
              <div className="blanc card">
                <img src={img3} alt="photo3"></img>Art Plastique
              </div>
            </Link>
            {/* <div classNameName="fouter">HELLO</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
