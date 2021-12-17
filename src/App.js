import './App.css';
import Cinema from './Components/Cinema';
import Theater from './Components/Theater';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header';


function App() {
  return (
    <div >
    {/* <Cinema/> */}
    {/* <Theater/> */}
    <Routes>
        <Route  exact path="/" element={<Header />} />
        {/* <Route path="Cinema" element={<Cinema />} /> */}
        {/* <Route path="Theater" element={<Theater />} /> */}
      </Routes>
    </div>
  );
}

export default App;
