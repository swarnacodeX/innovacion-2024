'use client';

import React from 'react';
import '../styles/ContactUs.module.css';
import { Footer, Navbar2} from '../components';
import Card from '../components/contactcard';
import '../styles/globals.css';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText } from '../components';
import {staggerContainer } from '../utils/motion';

const cardsData = [
  {
<<<<<<< HEAD
=======
    imageUrl: '/sayan.png',
    title: 'Sayan Dey',
    description1: 'Logistics & Procurement,',
    description2: 'Budget, Graphics',
    phoneNumber: '+918961838933',
  },
  {
      imageUrl: '/arkaprobho.png',
      title: 'Arkaprobho Laha',
      description1: 'Website, Registration,',
      description2: 'Database Management',
      phoneNumber: '+917477542614',
    },
  {
>>>>>>> 5e17cad5b3597539e2024726cdb114dd76cae225
    imageUrl: '/biswajit.png',
    title: 'Biswajit Das',
    description1: 'Content Head, ',
    description2: 'PR & Outreach, Planning',
    description3: 'and Infrastructure',
    phoneNumber: '+919830123475',
  },
  {
    imageUrl: '/soumanka.png',
    title: 'Soumanka Sarkar',
    description1: 'Project Exhibitions Lead',
    phoneNumber: '+919748598127',
  },
 
    
      {
        imageUrl: '/sohel.png',
        title: 'Sohel Hassan',
        description1: 'Photography & Collaboration Head ',
        phoneNumber: '+917980055488',
      },
      {
        imageUrl: '/gargijoarder.png',
        title: 'Gargi Joarder',
        description1: 'Social Media Publicity ',
        phoneNumber: '+918116006315',
      },
      
      {
        imageUrl: '/shrishtika.png',
        title: 'Srishtika Majumder',
        description1: 'Floor Management',
        phoneNumber: '+918777748634',
      }

    
  ];

function ContactUs() {
  return (
    <div className="bg-primary-black overflow-hidden">
      
        <Navbar2 />
        <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    ><TitleText
    title={(
      <>STUDENT HEADS</>
    )}
    textStyles="text-center"
  /></motion.div>

        <div className="max-w-screen-lg mx-auto">
        <div className="line-clamp-2 flex flex-wrap justify-center">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          
            description1={card.description1}
            description2={card.description2}
            description3={card.description3}
          
          phoneNumber={card.phoneNumber}
        />
      ))}
    </div></div>
        <Footer />
    </div>
  )
}

export default ContactUs;