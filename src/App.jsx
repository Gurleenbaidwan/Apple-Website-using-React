import NavBar from "./components/NavBar" ;
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import VideoCarousel from "./components/VideoCarousel";
import Model from "./components/Model"

function App ()  {
  return (
   <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
      <VideoCarousel/>
      <Model />
   </main>
  );
}

export default App
