import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Headwear from "./components/headwear/Headwear";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/headwear" element={<Headwear />} />
    </Routes>
    </div>
  );
}

export default App;
