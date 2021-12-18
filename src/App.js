import Cinema from "./Components/Cinema";
import Theater from "./Components/Theater";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import PlasticArt from "./Components/PlasticArt";
import Music from "./Components/Music";
import Emergency from "./Components/Emergency";
import NotFound from './Components/NotFound' 


function App() {
  return (
    <Routes>
       
        <Route exact path="/" element={<Header />} />
        <Route path="Cinema" element={<Cinema />} />
        <Route path="Theater" element={<Theater />} />
        <Route path="PlasticArt" element={<PlasticArt />} />
        <Route path="Music" element={<Music/>}/>
        <Route path="Emergency" element={<Emergency />} />
        <Route path="/*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
