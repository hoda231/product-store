import clint1 from "../images/PIC.jpg";
import clint2 from  "../images/oi.jpg";
import clint3  from "../images/yy.webp";
import React, { useEffect, useState } from "react";
import SliderContent from "../comd/SliderContent";
import Dots from "../comd/Dots";
import Arrows from "../comd/Arrows";
import sliderImage from "../comd/sliderImage";

import "../comd/slider.css";
import Img from "../images/PIC.jpg";
import "../styles/clints.css";


 const len = sliderImage.length -1;


 function Clints(props) {
   const [activeIndex, setActiveIndex] =  useState(5) ;
   
   
 
 
   useEffect(() => {
     const interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex +1); }, 5000);
        return () => clearInterval(interval);},[activeIndex])
  ;
   
    return (
    
          <div className="slider-container">
              <img className="IMG" src={Img} />
      <SliderContent activeIndex={activeIndex} 
      
 
        sliderImage={sliderImage}  
          />
           <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    
    
     
     
    </div>
			
      
		
        
     
      );
    
    }
  export default Clints;