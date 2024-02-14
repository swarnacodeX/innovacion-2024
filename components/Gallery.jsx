'use client';
import { Footer, Navbar } from '.';
import styles from '../styles';
import { motion } from 'framer-motion';
import { TitleText, TypingText } from '.';
import { slideIn, staggerContainer, fadeIn } from '../utils/motion';
import React from 'react'
import '../styles/globals.css';




const Gallery = ({ images }) =>{
  return (
    
    <div className="bg-primary-black overflow-hidden">
        
        <Navbar /><div>
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
        
        <span className="font-extrabold text-white">Here, you can explore all the captivating and mesmerizing moments of IEM-INNOVACION </span>
        </motion.p>
        </motion.div>
      
        <div className="container flex flex-wrap mx-auto">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image.src}
          alt={image.alt}
          className='w-1/2 p-2 rounded-xl lg:w-1/3'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      ))}
    </div>

        </div>
      <Footer/>
        
    </div>
   
  );
};

export default Gallery;