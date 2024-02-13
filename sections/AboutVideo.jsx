'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import React from 'react'

const AboutVideo = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
    <motion.div
        variants={fadeIn('up', 'tween', 0.4, 1)}
        className="relative mt-[50px] flex">
       
      <video width="1248" height="720" controls={false} preload='none' autoPlay muted loop>
    <source src='/Innovacion_Trailer_5-com.mp4'type='video/mp4'  />
    </video>
    </motion.div>
    </motion.div>
    </section>
  );
};

  
export default AboutVideo;