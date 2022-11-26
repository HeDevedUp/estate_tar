import React from "react";
import Banner from "../../components/firstPage/amenities";
import Hero from "../../components/herosection/amenities";
import Hero1 from "../../components/Collage/Hero";
import CameraSection from "../../sections/CameraSection";


import ValueSlides from "../../components/ValueSlides/amenitie";
import TalentSlides from "../../components/SlideShow/amentie/TalentSlides";
// import Contact from "../../components/GetinTouch/Contact";
import Footer from "../../components/Footer/Footer";
import { GlobalStyle } from "../../styles/GlobalStyle";



function Home() {
  return (
    <div name="home">
    <GlobalStyle/>
      <Banner />
      <Hero />
      <Hero1 />
      <ValueSlides />
      <TalentSlides />
      {/* <CameraSection/> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default Home;
