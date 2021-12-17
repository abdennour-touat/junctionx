import './App.css';
import Cinema from './Components/Cinema';
import Theater from './Components/Theater';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div >
    {/* <Cinema/> */}
    <Theater/>
    <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="Cinema" element={<Cinema />} />
        <Route path="Theater" element={<Theater />} />
      </Routes>
    </div>
  );
}

export default App;
