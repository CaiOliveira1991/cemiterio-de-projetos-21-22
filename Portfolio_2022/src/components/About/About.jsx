import React from 'react'
import caio from '../media/caio.jpg'
import pingu from '../media/pingu.png'
import './About.scss'
import { BsFillHeartFill } from "react-icons/bs";
import { BsHeartHalf } from "react-icons/bs";
import { motion } from 'framer-motion';
import {useScroll} from '../useScroll'
import { AboutAnimation } from '../animation';
import { AboutImgAnimation } from '../animation';


const About = () => {
  const[element, controls] = useScroll();

  return ( 

    <>
      <section id='About' className='flex'>
        <div className='container_about flex'>

          <motion.h3 variants={AboutAnimation} animate={controls} transition={{delay: 0.2, duration: 0.9, type: "tween"}}> - sobre / info</motion.h3>
          
          <img className='pingu' src={pingu} alt='prop' ref={element}/>

          <div className='container_skills' >

            <motion.h2  variants={AboutAnimation} animate={controls} transition={{delay: 0.3, duration: 0.9, type: "tween"}} >Skills</motion.h2>

            <motion.div  variants={AboutAnimation} animate={controls} transition={{delay: 0.4, duration: 0.9, type: "tween"}}  className='ensino start'>
              <ion-icon name="school"></ion-icon>
              <h4>Sistemas para internet</h4>
            </motion.div>

            <div className='skill'>

              <motion.div  variants={AboutAnimation} animate={controls} transition={{delay: 0.5, duration: 0.9, type: "tween"}}  className='start'>
                <p>HTML</p>
                <span className='flex'><BsFillHeartFill/><BsFillHeartFill/><BsFillHeartFill/><BsFillHeartFill/><BsHeartHalf/></span>
              </motion.div>

              <motion.div  variants={AboutAnimation} animate={controls} transition={{delay: 0.7, duration: 0.9, type: "tween"}}  className='start'>
                <p>CSS</p>
                <span className='flex'><BsFillHeartFill/><BsFillHeartFill/><BsFillHeartFill/><BsFillHeartFill/></span>
              </motion.div>

              <motion.div  variants={AboutAnimation} animate={controls} transition={{delay: 0.9, duration: 0.9, type: "tween"}}  className='start'>
                <p>Javascript</p>
                <span className='flex'><BsFillHeartFill/><BsFillHeartFill/><BsFillHeartFill/><BsHeartHalf/></span>
              </motion.div>

              <motion.div  variants={AboutAnimation} animate={controls} transition={{delay: 1.1, duration: 0.9, type: "tween"}}  className='start'>
                <p>React JS</p>
                <span className='flex'><BsFillHeartFill/><BsFillHeartFill/><BsFillHeartFill/></span>
              </motion.div>

              <motion.div  variants={AboutAnimation} animate={controls} transition={{delay: 1.3, duration: 0.9, type: "tween"}}  className='start'>
                <p>C++</p>
                <span className='flex'><BsFillHeartFill/><BsFillHeartFill/><BsFillHeartFill/></span>
              </motion.div>

              <motion.div  variants={AboutAnimation} animate={controls} transition={{delay: 1.5, duration: 0.9, type: "tween"}}  className='start'>
                <p>PYTHON</p>
                <span className='flex'><BsFillHeartFill/><BsFillHeartFill/></span>
              </motion.div>

              <motion.div  variants={AboutAnimation} animate={controls} transition={{delay: 1.7, duration: 0.9, type: "tween"}}  className='start'>
                <p>Typescript</p>
                <span className='flex'><BsFillHeartFill/><BsHeartHalf/></span>
              </motion.div>

              <motion.div  variants={AboutAnimation} animate={controls} transition={{delay: 1.9, duration: 0.9, type: "tween"}}  className='start'>
                <p>Node JS</p>
                <span className='flex'><BsFillHeartFill/><BsHeartHalf/></span>
              </motion.div>
              
            </div>
          </div>

          <motion.div variants={AboutImgAnimation} animate={controls} transition={{delay: 0.8, duration: 1.2, type: "tween"}} className='Caio_Jose flex' >
            <img className='caio' src={caio} alt='prop'/>
          </motion.div>

        </div>

      </section>
    </>

  )
}

export default About