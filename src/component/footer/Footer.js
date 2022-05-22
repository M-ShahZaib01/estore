import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Footer.css"
const Footer = () => {
  return (
    <>
         <section class="footer">
        <div class="foot">
          <h2>Quick Links</h2>
          <br/>
    
          <ul>
            <li><NavLink to ="/">Home</NavLink></li>
            <li><NavLink to ="/about">About us</NavLink></li>
            <li><NavLink to ="/contact">Contact us</NavLink></li>
            <li><a href="javascript:void(0)"><i class="bi bi-linkedin"></i> Linkedin Profile</a></li>
            <li><a href="javascript:void(0)"><i class=" bi bi-twitter"></i> Twitter Profile</a></li>
            <li><a href="javascript:void(0)"><i class=" bi bi-instagram"></i> Instagram Profile</a></li>
            <li><a href="javascript:void(0)"><i class=" bi bi-facebook"></i> Facebook Profile</a></li>
    
          </ul>
        </div>
        <div class="foot">
          <h2>Contacts</h2>
          <br/>
    
          <ul> 
            <li><a href="javascript:void(0)">Contact details:</a></li>
            <li><a href="javascript:void(0)">Email: 123@email.com</a></li>
            <li><a href="javascript:void(0)">Call Us</a></li>
            <li><a href="javascript:void(0)">Help?</a></li>
            <li>
              <address class="text-white">
                <p><i class="bi bi-geo-alt"></i> Address: 155 - B Millat Rd, Gulistan Colony, Faisalabad, Punjab</p>
                <p><i class="bi bi-telephone"></i> Phone: 041-299302</p>
              </address>
            </li>
          </ul>
        </div>
      </section>
    
      <footer>
        <a href="javascript:void(0)">Terms & Conditions</a>
        <b>|</b>
        <a href="javascript:void(0)">Cookie Policy</a>
        <b>|</b>
        <a href="javascript:void(0)">Privacy Policy</a>
        <br/>
        <p>All Rights Reserved Copyright &copy; 2021.</p>
      </footer>
    </>
  )
}

export default Footer