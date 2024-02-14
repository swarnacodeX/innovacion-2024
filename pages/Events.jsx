import { Footer, Navbar} from '../components';

import React from 'react'
import '../styles/globals.css';


import Image from 'next/image';

import {RoboCarousel} from '../components';


function Events() {
  return (
    <div className="bg-primary-black overflow-hidden">
      
        <Navbar />
        <RoboCarousel />
        <div className="" />
        <Footer />
    </div>
  )
}

export default Events;