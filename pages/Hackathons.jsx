import { Footer2, Navbar2} from '../components';

import React from 'react'
import '../styles/globals.css';


import Image from 'next/image';

import {HackathonCarousel} from '../components';


function Hackathons() {
  return (
    <div className="bg-primary-black overflow-hidden">
      
        <Navbar2 />
        <HackathonCarousel />
        <div className="" />
        <Footer2 />
    </div>
  )
}

export default Hackathons;