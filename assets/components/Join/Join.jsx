import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "../Join/Join.css";

const Join=()=>{

    const form= useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fse70fh', 'template_vfbwz3a', form.current, 'qJTd3slbEvpnpPiLp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <div className="Join" id="joun-us">
            <div className="left-j">
                <hr />
                <div>
                    <span>READY TO</span>
                    <span className="stroke-text">LEVEL UP</span>
                </div>
                <div>
                    <span  className="stroke-text">YOUR BODY</span>
                    <span >WIHT US?</span>
                </div>
            </div>


            <div className="right-j">
                <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                    <input type="email" name="user_email" id="" placeholder="Enter your Email Address" />
                    <button className="btn btn-j">Join Now</button>

                </form>
            </div>
        </div>
    )
}


export default Join;