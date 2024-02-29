// ComingSoon.js
'use client';

import { Footer2, Navbar2} from '../components';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

import { motion } from 'framer-motion';


import React from 'react'
import '../styles/globals.css';

import Image from 'next/image';


function Schedules() {
  return (
    
    <div className="bg-primary-black overflow-hidden">
        
        <Navbar2 />
        <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    ></motion.div>
        <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h2 variants={textVariant(1.1)} className={styles.heroHeading}>
          Coming Soon!
        </motion.h2>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}></h1>
        </motion.div>
      </div>
      <div className="gradient-04-1 z-0" />
      <Footer2/>
        
    </div>
   
  );
};

export default Schedules;
