import { Footer2, Navbar2} from '../components';

import React from 'react'
import '../styles/globals.css';


import Image from 'next/image';

import {RoboticsCarousel} from '../components';


function Robotics() {
  return (
    <div className="bg-primary-black overflow-hidden">
      
        <Navbar2 />
        <RoboticsCarousel />
        <div className="" />
        <Footer2 />
    </div>
  )
}

export default Robotics;