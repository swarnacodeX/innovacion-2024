import { Footer2, Navbar2} from '../components';

import React from 'react'
import '../styles/globals.css';


import Image from 'next/image';

import {GamingCarousel} from '../components';


function Gaming() {
  return (
    <div className="bg-primary-black overflow-hidden">
      
        <Navbar2 />
        <GamingCarousel />
        <div className="" />
        <Footer2 />
    </div>
  )
}

export default Gaming;