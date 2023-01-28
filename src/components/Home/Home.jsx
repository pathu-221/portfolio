import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import { bottomToTop, topToBottom } from '../../utils/animations';

import './Home.styles.scss';

export default function Home({gif}) {


  useEffect(() => {
    
    return () => {
      
    }
  }, [])
  

  return (
    <>
    <motion.div className='content'>  
   <div className="head-content">
   <motion.h3
    variants={bottomToTop}
    initial={'initial'}
    animate={'animate'}
    className="ml10">
      <motion.span className="letters">Hi there, I am Pratham, </motion.span><br></br>
      <motion.span>A web developer from India</motion.span>
    </motion.h3>
    <motion.p
    className='para-text'
    variants={bottomToTop}
    initial={'initial'}
    animate={'animate'}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nostrum culpa quae tempora. Enim explicabo quae eius iste fugiat, vitae i
    </motion.p>
   </div>
    </motion.div>
    <div className='right-content'>
      <motion.div
      className="image-container">
      <motion.img
      variants={topToBottom}
      initial={'initial'}
      animate={'animate'}
      src={ gif} />
      </motion.div>  
    </div>
    </>
  )
}


