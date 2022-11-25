import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import Header from "../components/!!HeroSection/home";




const Quote = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;

    let trigger = ScrollTrigger.create({
      trigger: Elem,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });

    return () => {
      if (trigger) trigger.kill();
    };
  }, []);

  return (
    <div ref={sectionRef}>

<Header/>

    </div>
  );
};

export default Quote;
