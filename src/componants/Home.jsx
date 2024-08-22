import React, { useRef } from 'react'
import pdf from '../pdf/resume.pdf'
import hero from './Data/hero.json'
import Typed from "typed.js";
import { useEffect } from 'react';


const Home = () => {

  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Sohel Sayyad",
        "I'm Java full stack developer",
      
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home">

       <div className="left" data-aos="fade-up-right"
        data-aos-duration="1000">
       
        <h1 ref={typedRef} >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, modi?
        </h1>


        <a href={pdf} download="resume.pdf" className="btn btn-outline-warning">Download Resume</a> 
       </div>

       <div className="right">
        <div className="img"
        data-aos="fade-down"
        data-aos-duration="1000">
         <img src={`/assets/${hero.imgSrc}`} alt="" />
        </div>
       </div>
      </div>
    </>
  )
}

export default Home
