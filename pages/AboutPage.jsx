"use client";

import React from 'react';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import { Footer, Navbar2 } from '../components';

import styles from '../styles';
import AboutCarousel from '../components/AboutCarousel';
import AboutVideo from '../sections/AboutVideo';
import { fadeIn, staggerContainer } from '../utils/motion';

const AboutPage = () => {
  return (
  <div className="bg-primary-black overflow-hidden">
    <Navbar2 />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About INNOVACION" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        
        <span className="font-extrabold text-white">Institute of Engineering & Management, Kolkata</span>  in association with <span className="font-extrabold text-white">
        University of Engineering & Management
        </span>{' '} is organising its Annual Techno-Management Fest-
        <span className="font-extrabold text-white">
        "Innovación 2024"
        </span>{' '} from <span className="font-extrabold text-white">
        08th - 10th March, 2024</span>{' '}
        . Innovacion, ignites minds ablaze,
A vibrant fusion of tech brilliance and creative maze.
Students showcase prowess, ideas on display,
A celebration where innovation takes the stage each day.
       Let's{' '}
        <span className="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
        <AboutVideo />
        <TypingText title="| 2024 Guest" textStyles="text-center" />
        <motion.p
        variants={fadeIn('up', 'tween', 0.4, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          {' '}
        <span className="font-bold text-white">Will be updated soon</span>
        </motion.p>

        
      <motion.div
        variants={fadeIn('up', 'tween', 0.5, 1)}
        className="relative mt-[50px] flex"
      >
        <TypingText title="| Previous Year Winners" textStyles="text-center" />
      </motion.div>
    <motion.div
        variants={fadeIn('up', 'tween', 0.6, 1)}
        className="relative mt-[50px] flex"
      >
        <AboutCarousel />
      </motion.div>
      </motion.div>
    <div className="" />
    <Footer />
  </div>
  );
}

export default AboutPage;