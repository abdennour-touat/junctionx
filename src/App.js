import './App.css';
import Cinema from './Components/Cinema';
import Theater from './Components/Theater';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header';
import PlasticArt from './Components/PlasticArt';
import Music from './Components/Music';


function App() {
  return (
    <div >
    {/* <Cinema/> */}
    {/* <Theater/> */}
    <Routes>
        <Route  exact path="/" element={<Header />} />
        <Route path="Cinema" element={<Cinema />} />
        <Route path="Theater" element={<Theater />} />
        <Route path="PlasticArt" element={<PlasticArt />} />
        <Route path="Music" element={<Music/>} />
      </Routes>
    </div>
  );
}

export default App;
