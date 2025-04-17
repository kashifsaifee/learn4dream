import React from 'react'
import '../Styles/Header.css';
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Header = () => {
  return (
    <div className='header' >
            <div className='header-1'>
                  <CiLocationOn/>  {/* address will appear here  */}  | <CiMail />  info@gmail.com  
                  <span className='header-2'>
                Follow us on : <FaLinkedin/> <FaWhatsapp/>
            </span> 
            </div>
          
          
    </div>
  )
}

export default Header