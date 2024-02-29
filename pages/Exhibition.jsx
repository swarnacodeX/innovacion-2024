import { Footer2, Navbar2} from '../components';

import React from 'react'
import '../styles/globals.css';


import Image from 'next/image';

import {ExhibitionCarousel} from '../components';


function Exhibition() {
  return (
    <div className="bg-primary-black overflow-hidden">
      
        <Navbar2 />
        <ExhibitionCarousel />
        <div className="" />
        <Footer2 />
    </div>
  )
}

export default Exhibition;