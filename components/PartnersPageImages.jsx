'use client';
import { Footer2, Navbar2 } from '.';
import styles from '../styles';
import { motion } from 'framer-motion';
import { TitleText, TypingText } from '.';
import { slideIn, staggerContainer, fadeIn } from '../utils/motion';
import React from 'react'
import '../styles/globals.css';




const PartnersPageImages = ({images}) =>{
  return (
    
    <div className="bg-primary-black overflow-hidden">
        
        <Navbar2 /><div>
        <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
  <motion.p
        variants={fadeIn('up', 'tween', 0.1, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        
        <span className="font-extrabold text-white">PARTNERS </span>
        </motion.p>
        </motion.div>
      
        <div className="container flex flex-wrap mx-auto">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image.src}
          alt={image.alt}
          className='w-1/8 h-auto p-2 rounded-xl xs:w-1/4'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      ))}
    </div>

        </div>
      <Footer2/>
        
    </div>

  );
};

export default PartnersPageImages;