import './App.css';
import Cinema from './Components/Cinema';
import { AnimatePresence } from 'framer-motion';
import Theater from './Components/Theater';
import {  Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header';
import PlasticArt from './Components/PlasticArt';
import Music from './Components/Music';
import Emergency from './Components/Emergency';


function App() {
  return (
    
  <AnimatePresence>
    <Routes>
        <Route  exact path="/" element={<Header />} />
        <Route path="Cinema" element={<Cinema />} />
        <Route path="Theater" element={<Theater />} />
        <Route path="PlasticArt" element={<PlasticArt />} />
        <Route path='Emergency' element={<Emergency/>} />
      </Routes>
  </AnimatePresence> 
    
  );
}

export default App;
