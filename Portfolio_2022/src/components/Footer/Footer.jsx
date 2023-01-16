import React from 'react'
import logo from '../media/Logo.png'
import './Footer.scss'
import { BsWhatsapp } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='flex column'>

      <div className='footer column flex'>

        <h2>contate-me:</h2>
        <h3>E-mail:<span>cj.devs@outlook.com</span></h3>

        <div className='f_social around'>
          <a href="https://wa.me/5521969921216" target="_blank" rel="noopener noreferrer"><BsWhatsapp/></a>
          <a href="https://github.com/C410J0s3" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
          <a href="https://www.linkedin.com/in/caio-oliveira-44a8b9237/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
          <a href="https://www.instagram.com/caiojuse/" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
        </div>
        
      </div>

      <div className='fim flex column'>
        <img src={logo} alt='prop'/>
        <h3>by Caio José</h3>
      </div>

    </footer>
  )
}

export default Footer
