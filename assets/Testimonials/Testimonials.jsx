import React from "react";
import { useState } from "react";
import "../Testimonials/Testimonials.css";
import {testimonialsData} from "../../data/testimonialsData"
import leftArrow from "../leftArrow.png"
import rightArrow from "../rightArrow.png"



const Testimonials =()=>{

    const [selected,setSelected]= useState(0);
    const tLenght = testimonialsData.lenght;
    

    return( <div className="Testimonials">
                <div className="left-t">
                    <span>Testimonials</span>
                    <span className="stroke-text">What they</span>
                    <span>Say About Us</span>
                    <span>
                         {testimonialsData[selected].review}
                    </span>
                    <span>
                        <span style={{color: "var(--orange)"}}>
                            {testimonialsData[selected].name}
                        </span>{" "}
                        -{testimonialsData[selected].status}
                    </span>
                </div>
                <div className="right-t">
                    <div></div>
                    <div></div>
                    <img src={testimonialsData[selected].image} alt="" srcset="" />
                    <div className="arrows">
                        <img 
                        onClick={()=>{
                            selected===0?setSelected(tLenght-1):
                            setSelected((prev)=>prev-1)
                        }}
                        src={leftArrow} alt="" srcset="" /> 
                        
                        <img 
                        onClick={()=>{
                            selected===tLenght -1 ? setSelected(0)
                            : setSelected((prev)=>prev + 1)
                        }}
                        src={rightArrow} alt="" />
                    </div>
                </div>
            </div> 
    )
}


export default Testimonials;