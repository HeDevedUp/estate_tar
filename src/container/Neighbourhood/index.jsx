import React from "react";
import Banner from "../../components/firstPage/neighbor/index";
import Hero from "../../components/herosection/Neighbor";
import Hero1 from "../../components/Collage/Hero";
// import CameraSection from "../../sections/CameraSection";

import ValueSlides from "../../components/ValueSlides/neighbor";
// import TalentSlides from "../../components/SlideShow/neighbor/TalentSlides";
// import Contact from "../../components/GetinTouch/Contact";
import Footer from "../../components/Footer/Footer";
import { GlobalStyle } from "../../styles/GlobalStyle";



function Neighbourhood() {
  return (
    <div name="home">
    <GlobalStyle/>
      <Banner />
      <Hero />
      <Hero1 />
      <ValueSlides />
      {/* <TalentSlides /> */}
      {/* <CameraSection/> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default Neighbourhood;
