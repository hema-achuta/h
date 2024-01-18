import React from 'react';
import about from '../../images/ww.png';
import './AboutSection.scss';

const AboutSection = () => {
   return (
      <div className="about-section">
         <div className="container">
            <div className="row align-items-end">
               <div className="col-md-6 pe-md-5">
                  <div className="header-text">
                     <span>TRUSTED COMPANIES</span>
                     <h1>OUR OBJECTIVE</h1>
                     <p>Simplify your operations with barcodescanners at every touchpoint .Track every stock move from purchase to warehouse to order.</p>
                     <button className="btn-orange">view more</button>
                  </div>
               </div>
               <div className="col-md-6 ps-md-5">
                  <div className="img-box">
                     <img className="img-fluid" src={about} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutSection;