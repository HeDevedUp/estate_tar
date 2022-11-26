import React from "react";
import Banner from "../../components/Banner/Banner";
import Hero from "../../components/herosection/team";
import Hero1 from "../../components/Gallery/index";
import CameraSection from "../../sections/CameraSection";


import ValueSlides from "../../components/ValueSlides/team/index";
import TalentSlides from "../../components/SlideShow/team/TalentSlides";
import Contact from "../../components/GetinTouch/Contact";
import Footer from "../../components/Footer/Footer";
import { GlobalStyle } from "../../styles/GlobalStyle";



function Home() {
  return (
    <div name="home">
    {/* <GlobalStyle/> */}
      <Banner />
      <Hero />
      {/* <Hero1 /> */}
      <ValueSlides />
      <TalentSlides />
      {/* <CameraSection/> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default Home;
