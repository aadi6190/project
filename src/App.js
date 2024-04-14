import "./App.css";
import Cards from "./Components/Cards";
import CitiesByState from "./Components/Cities";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import Navbar from "./Components/Navbar";
import OurWorks from "./Components/OurWorks";
import Services from "./Components/Services";
import Slide from "./Components/Slide";
import Talk from "./Components/Talk";
import Video from "./Components/Video";

function App() {
  return (
    <div className="App">
      <Hero />

      <Navbar />
      <br />
      <br />
      <OurWorks />
      <br />
      <br />
      <Services />
      <br/>
      <br/>
      <Talk/>
      <br/>
      <br/>
      <Cards/>
      <br/>
      <br/>
      <Slide/>
      <br/>
      <br/>
      <Video/>
      <br/>
      <br/>
      <Info/>
      <br/>
      <br/>
      <CitiesByState/>
      <br/>
      <br/>
      <Footer/>

 
    </div>
  );
}

export default App;
