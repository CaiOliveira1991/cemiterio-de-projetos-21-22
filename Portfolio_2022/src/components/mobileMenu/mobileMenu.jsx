import React from 'react'
import './mobileMenu.scss'
import { motion } from "framer-motion";
import {LiAnimation } from '../animation';

const Mobile_Menu = () => {
  const [toogle, setToogle] = React.useState(true);
  const [tamanho, setTamanho] = React.useState('8vh');
  const [play, setPlay] = React.useState('none');

  React.useEffect(() => {
    setTamanho((state) => toogle ? '8vh': '50vh');
  }, [toogle])
  
  React.useEffect(() => {
    setPlay((state) => toogle ? 'none': 'flex');
  }, [toogle])

  
  return (
    <> 
        <motion.div variants={LiAnimation} transition={{delay: 0.8, duration: 0.6, type: "tween"}} className='Mobile_container' style={{ height:tamanho,}}>
          <button className='Mobile_btn' onClick={e =>  setToogle(state => !state)}>Menu</button>
            <ul className='Mobile flex column' style={{ display:play,}}>

                <li className='flex'>
                <a className='flex' href='#Home'>Início</a>
                </li>

                <li className='flex'>
                <a className='flex' href='#About'>Sobre</a>
                </li>

                <li className='flex'>
                <a className='flex' href='#Service'>Serviços</a>
                </li>

                <li className='flex'>
                <a className='flex' href='#Portfolio'>Portfólio</a>
                </li>

            </ul>
        </motion.div>
    </>
  )
}

export default Mobile_Menu