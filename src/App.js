import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import Quote from "./sections/Quote";
import Header from "./sections/header"
import { GlobalStyle } from "./styles/GlobalStyle";
import ProcessorSection from "./sections/ProcessorSection";
import BatterySection from "./sections/BatterySection";
import ColorSection from "./sections/ColorSection";
import CameraSection from "./sections/CameraSection";
import PricingSection from "./sections/PricingSection";
import Collection from './sections/Collection'
import Testimonials from "./sections/Testimonials";
import Footer from './sections/Footer'
import { ColorContextProvider } from "./context/ColorContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      {/* <PhoneModel /> */}
      <HeroSection />
      <DesignSection />
      {/* <DisplaySection /> */}
      <ProcessorSection />
      <Collection />
      <ColorContextProvider>
        {/* <ColorSection /> */}
        <CameraSection />
        <Testimonials />
        <Footer/>
      </ColorContextProvider>
    </>
  );
}

export default App;
