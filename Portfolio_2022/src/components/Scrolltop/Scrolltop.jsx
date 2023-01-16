import React from 'react'
import './Scrolltop.scss'
import { AiOutlineArrowUp } from "react-icons/ai";
import { motion } from "framer-motion";
import {WebAnimation} from '../animation';

const Scrolltop = () => {
  return (
    <>

      <motion.div variants={WebAnimation} transition={{delay: 5.0, duration: 0.6, type: "tween"}} className='scroll flex'>
        <a href='#Home'><AiOutlineArrowUp/></a>
      </motion.div>
      
    </>
  )
}

export default Scrolltop