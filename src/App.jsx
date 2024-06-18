/* eslint-disable react-refresh/only-export-components */
import NavBar from "./components/NavBar" ;
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import * as Sentry  from '@sentry/react';
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import VideoCarousel from "./components/VideoCarousel";


function App() {

  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
      <VideoCarousel/>
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}


export default Sentry.withProfiler(App);
