import "./App.css";
// import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Headwear from "./components/headwear/Headwear";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Headwear />} />
    </Routes>
      {/* <Hero /> */}
    </div>
  );
}

export default App;
