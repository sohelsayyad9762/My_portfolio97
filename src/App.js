import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./componants/Navbar";
import Home from "./componants/Home";
import Experince from "./componants/Experince";
import Skills from "./componants/skills";
import Projects from "./componants/Project";
import Contact from "./componants/Contact";
import Aos from "aos";
import "aos/dist/aos.css"

function App() {
  
  useEffect(() => {
    Aos.init();
    
   }, [])
   

  return (
    <>
      <Navbar/>
      <div className="container">
        <Home/>
        <Experince/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
