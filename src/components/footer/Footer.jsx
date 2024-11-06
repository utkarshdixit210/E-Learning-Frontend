import React from 'react'
import "./footer.css"
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy; 2024 Your E-learning Platform. All rights reserved.<br/>
                Made with 💗 <a href="">Utkarsh Dixit</a>
            </p>
            <div className="social-links">
                <a href=""><FaInstagram/></a>
                <a href=""><RiTwitterXLine />
                </a>
                <a href=""><FaLinkedin /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
