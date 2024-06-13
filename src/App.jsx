import NavBar from "./components/NavBar" ;
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import VideoCarousel from "./components/VideoCarousel";

function App ()  {
  return (
   <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
      <VideoCarousel/>
   </main>
  );
}

export default App
