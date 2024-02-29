import { Footer2, Navbar2} from '../components';

import React from 'react'
import '../styles/globals.css';


import Image from 'next/image';

import {OthersCarousel} from '../components';


function Others() {
  return (
    <div className="bg-primary-black overflow-hidden">
      
        <Navbar2 />
        <OthersCarousel />
        <div className="" />
        <Footer2 />
    </div>
  )
}

export default Others;