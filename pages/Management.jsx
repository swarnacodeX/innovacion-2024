import { Footer2, Navbar2} from '../components';

import React from 'react'
import '../styles/globals.css';


import Image from 'next/image';

import {ManagementCarousel} from '../components';


function Management() {
  return (
    <div className="bg-primary-black overflow-hidden">
      
        <Navbar2 />
        <ManagementCarousel />
        <div className="" />
        <Footer2 />
    </div>
  )
}

export default Management;