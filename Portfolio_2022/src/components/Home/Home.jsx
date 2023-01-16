import React from 'react'
import './Home.scss'
import { BsWhatsapp } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
import {CaioAnimation ,WebAnimation , SocialAnimation} from '../animation';

const Home = () => {

  return (
    <>
      <main id='Home' className='flex'>
        <motion.div variants={WebAnimation} transition={{delay: 0.4, duration: 0.6, type: "tween"}} className='main flex'>

          <div className='container column'>

            <div className='txt_main'>
              <motion.h3 variants={CaioAnimation} transition={{delay: 0.6, duration: 0.6, type: "tween"}} >Sou Caio José!</motion.h3>
              <motion.h1 variants={WebAnimation} transition={{delay: 1.2, duration: 0.6, type: "tween"}} >Web<br/>
              Developer</motion.h1>
              <motion.a variants={WebAnimation} transition={{delay: 1.3, duration: 0.6, type: "tween"}} href="https://wa.me/5521969921216" target="_blank" rel="noopener noreferrer" >+55 21 96992-1216</motion.a>
            </div>

            <motion.div variants={WebAnimation} transition={{delay: 1.6, duration: 0.6, type: "tween"}} id='Btn_main' className='flex' >
              <a href='https://drive.google.com/file/d/12Ftz_vMTQd9uIzHPZQnkSUt6Q5D_FPcx/view?usp=sharing' target='_blank' rel='noopener noreferrer' className='Btn_CV flex'>Download CV</a>
              <a href='#Portfolio' className='Btn_main flex'>Portfólio</a>
            </motion.div>

            <motion.div variants={SocialAnimation} transition={{delay: 1.8, duration: 0.6, type: "tween"}} className='Social around' >
              <a href="https://wa.me/5521969921216" target="_blank" rel="noopener noreferrer"><BsWhatsapp/></a>
              <a href="https://github.com/C410J0s3" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
              <a href="https://www.linkedin.com/in/caio-oliveira-44a8b9237/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
              <a href="https://www.instagram.com/caiojuse/" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
            </motion.div>

          </div>

        </motion.div>
      </main>
    </>
  )
}

export default Home
