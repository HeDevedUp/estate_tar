import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Scrolltotop from "./components/Scroll-to-top/index";
import { ScrollFromBottom } from "./components/Scroll-to-top/ScrollFromBottom";
import Error404 from "./container/Error404/index";
import Home from "./container/Home/index";
import Amenities from "./container/Amenities/index";
import Neighbourhood from './container/Neighbourhood/index'
import TheTeam from './container/Team/index'
// import Residences from './container/Residence/index'
import Navbar from "./components/Navbar/Navbar";
import Cursor from "./components/CustomCursor/Cursor";

function App() {
  return (
    <div className="App">
      <Router>
        <Cursor />
        <Scrolltotop />
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
          <Route path="/amenties" element={<Amenities />} />
           <Route path="/neighbourhood" element={<Neighbourhood />} />
          <Route path="/team" element={<TheTeam />} />
          {/* <Route path="/residence" element={<Residences />} /> */}

          <Route exact path="*" element={<Error404 />} />
        </Routes>
        <ScrollFromBottom />
      </Router>
    </div>
  );
}

export default App;
