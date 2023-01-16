import { motion } from "framer-motion";
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Service from './components/Service/Service'
import CV from './components/CV/CV'
import Portfolio from  './components/Portfolio/Porfolio'
import Footer from './components/Footer/Footer'
import Scrolltop from './components/Scrolltop/Scrolltop'

import './App.scss';


function App() {
  return (
    <motion.div initial="hidden" animate="show">

      <Header />
      <Home />
      <About />
      <Service />
      <CV />
      <Portfolio />
      <Footer />
      <Scrolltop />

    </motion.div>
  );
}

export default App;