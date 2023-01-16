import React  from 'react'
import MobileMenu from '../mobileMenu/mobileMenu.jsx';
import './Navbar.scss'
import { motion } from "framer-motion";
import {LiAnimation } from '../animation';

const Navbar = () => {

  return (
    <>
      <nav id='nav' className='flex'>

        <ul className='Menu'>

          <motion.li variants={LiAnimation} transition={{delay: 0.8, duration: 0.6, type: "tween"}} className='link'>
            <a href='#Home'>Início</a>
          </motion.li>

          <motion.li variants={LiAnimation} transition={{delay: 1.2, duration: 0.6, type: "tween"}} className='link'>
            <a href='#About'>Sobre</a>
          </motion.li>

          <motion.li variants={LiAnimation} transition={{delay: 1.6, duration: 0.6, type: "tween"}} className='link'>
            <a href='#Service'>Serviços</a>
          </motion.li>

          <motion.li variants={LiAnimation} transition={{delay: 2.0, duration: 0.6, type: "tween"}} className='link'>
            <a href='#Portfolio'>Portfólio</a>
          </motion.li>
          
        </ul>

        <MobileMenu />
    
      </nav>

      
    </>
  )
}

export default Navbar