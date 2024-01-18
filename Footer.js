import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Footer.scss'

const Footer = () => {
   return (
      <div className="footer-section">
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-md-6">
                  <div className="footer-box">
                     <h3 className="logo"><span>Inventory Management with </span>QR</h3>
                     <p>Visakhpatnam</p>
                     <p>PHONE - +91 9000549240, +91 7995495573</p>
                     <p>EMAIL - support@inventory.com</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="footer-box">
                     <h5>Useful Links</h5>
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <Link className="link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/menus">Menus</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/appointment">Appointment</Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 mx-auto">
                  <div className="footer-box hour-box">
                     
                  </div>
               </div>
            </div>
            <div className="copyright">
               <span> &copy; Inventory Management with QR. all Rights Reserved. Designed by Hema </span>
            </div>
         </div>
      </div>
   );
};

export default Footer;