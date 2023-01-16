import React from 'react'
import './Portfolio.scss'
import insta from '../media/instagran.png'
import tattoo from '../media/tattoo.jpg'
import l2 from '../media/l2.png'
import RR from '../media/RR.png'
import cep from '../media/s.png'
import finance from '../media/finance.png'
import port from '../media/Port.png'
import { motion } from 'framer-motion'
import {PortAnimation} from '../animation.js'
import {PortCardAnimation} from '../animation.js'
import {useScroll} from '../useScroll'

const Portfolio = () => {
  const[element, controls] = useScroll();

  return (
  
    <>
      <section id='Portfolio' className='flex' ref={element}>
        <div className='container_Port flex'>
          <motion.h2 
          variants={PortAnimation}
           animate={controls} 
           transition={{
            delay: 0.2,
             duration: 0.9,
              type: "tween"
              }}
              > - portfólio / start</motion.h2>

          <motion.div variants={PortCardAnimation} animate={controls} transition={{delay: 0.5, duration: 0.9, type: "tween"}}  class="contain flex">

            <ul class="cards around column">

              <motion.li whileHover={{ scale: 1.1 }} class="placa">
                <div class="img"><img src={tattoo} alt='prop'/></div>
                <div class="descrit">
                  <h3>Tattoo</h3>
                  <p>Site feito em HTML / CSS / JS com uso e Jquery / TweenMax / ScrollMagic usando tambem Google Maps. <br/>
                  <a href="https://https://c410j0s3.github.io/Tattoo-Page/.com/C410J0S3/Tattoo-Page" target="_blank" rel="noopener noreferrer">@Tattoo</a></p>
                </div>
              </motion.li>

              <motion.li whileHover={{ scale: 1.1 }} class="placa">
                <div class="img"><img src={finance} alt='prop'/></div>
                <div class="descrit">
                  <h3>Sistema Financeiro</h3>
                  <p>Aplicativo js sistema para controle financeiro. [typescript]. <br/>
                  <a href="https://caioliveira19.github.io/finance/" target="_blank" rel="noopener noreferrer">@Financeiro</a></p>
                </div>
              </motion.li>
              
              <motion.li whileHover={{ scale: 1.1 }} class="placa">
                <div class="img"><img src={port} alt='prop'/></div>
                <div class="descrit">
                  <h3>Portfólio</h3>
                  <p>Portfólio em React Js para apresentação dos projetos.<br/>
                  <a href="https://c410j0s3.github.io/Portfolio_Pages/" target="_blank" rel="noopener noreferrer">@Portfólio</a></p>
                </div>
              </motion.li>

              <motion.li whileHover={{ scale: 1.1 }} class="placa">
                <div class="img"><img src={RR} alt='prop'/></div>
                <div class="descrit">
                  <h3>Rolls-Royce</h3>
                  <p>Site feito em React JS / NODE-SASS / FRAMER-MOTION / .... composição do Portfólio<br/>
                  <a href="https://github.com/C410J0S3/RR" target="_blank" rel="noopener noreferrer">@Rolls-Royce</a></p>
                </div>
              </motion.li>

              <motion.li whileHover={{ scale: 1.1 }} class="placa">
                <div class="img"><img src={l2} alt='prop'/></div>
                <div class="descrit">
                  <h3>Lineage II</h3>
                  <p>Site em HTML / CSS / JS . Criado para sites de servers de Lineage II, com area de Login e Download.<br/>
                  <a href="https://https://c410j0s3.github.io/Page_L2/" target="_blank" rel="noopener noreferrer">@Lineage II</a></p>
                </div>
              </motion.li>


              <motion.li whileHover={{ scale: 1.1 }} class="placa">
                <div class="img"><img src={cep} alt='prop'/></div>
                <div class="descrit">
                  <h3>Buscador de Cep</h3>
                  <p>Feito em React JS utilizando API Busca Cep para fazer a pesquisa apresentando endereço do cep buscado.<br/>
                  <a href="https://github.com/C410J0S3/Busca_Cep" target="_blank" rel="noopener noreferrer">@BuscaCep</a></p>
                </div>
              </motion.li>

              <motion.li whileHover={{ scale: 1.1 }} class="placa">
                <div class="img"><img src={insta} alt='prop'/></div>
                <div class="descrit">
                  <h3>Clone instagram</h3>
                  <p>Clone do instagram feito como desafio do Bootcamp Impulso JavaScript da Dio.<br/>
                  <a href="https://github.com/C410J0S3/insta_clone" target="_blank" rel="noopener noreferrer">@Clone instagram</a></p>
                </div>
              </motion.li>

            </ul>

          </motion.div>
          
        </div> 
      </section>
    </>
  )
}

export default Portfolio
