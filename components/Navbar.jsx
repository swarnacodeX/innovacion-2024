"use client";

import { motion } from 'framer-motion';
import { useEffect, useState} from  'react'
import styles from '../styles';
import { navVariants } from '../utils/motion';
import Link from 'next/link';
import Image from 'next/image';
import {Collapse} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const handleScrollToGetStarted = () =>{
    const getStartedSection = document.getElementById('regis');
    if (getStartedSection) {
      getStartedSection.scrollIntoView({ behavior: 'smooth' });
    }
};
const handleWindowResize = () => {
    setShowMobileNav(window.innerWidth < 960);
    setOpenNav(false); // Close the mobile nav when resizing to desktop view
  };

  useEffect(() => {
    handleWindowResize();
    // Call the handler initially
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (

  
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} px-3 relative`}
  >
    
    <div
      className="mx-auto max-w-screen-xl px-6 py-3 bg-transparent flex items-center justify-between">

     <Image
        src="/IEM.png" width={160} height={160}
        className="lg:w-[140px] lg:h-[140px] width:0 xs:w-[65px] xs:h-[65px] object-contain"
      />
      
      <div className="hidden lg:flex items-center  gap-6 py-6 text-white">
      <Link className=" p-1 font-medium text-white text-neon-glow no-underline"  href='/'>Home</Link>
      <Link className=" p-1 font-medium text-white text-neon-glow no-underline"  href='/AboutPage'>About</Link>
      <Link className=" p-1 font-medium text-white text-neon-glow no-underline"  href='/Events'>Events</Link>
      <Link className=" p-1 font-medium text-white text-neon-glow no-underline"  href='/Schedules'>Schedules</Link>

      
      <Link className=" p-1 font-medium text-white text-neon-glow no-underline"  href='/GalleryPage'>Gallery</Link>
      <Link className=" p-1 font-medium text-white text-neon-glow no-underline"  href='/Partners'>Partners</Link>
      <Link className=" p-1 font-medium text-white text-neon-glow no-underline"  href='/ContactUs'>Contact  Us</Link>
      <button onClick={handleScrollToGetStarted}className='registerbutton1'>Register</button>
      </div>
      <Image
  src="/innovacion2k24-logo.png"
  alt="headset" width={0} height={0}
  className="lg:w-[140px] lg:h-[200px] xs:w-[100px] xs:h-[100px] object-contain"
/>
{showMobileNav && (
          <div className="hidden md:hidden lg:hidden xs:block xs:ml-auto">
            {openNav ? (
              <XMarkIcon onClick={() => setOpenNav(!openNav)} className=" text-white h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon onClick={() => setOpenNav(!openNav)} className="  text-white h-6 w-6" strokeWidth={2} />
            )}
          </div>
        )}
      </div>
      <div className={openNav ? 'block' : 'hidden'}>
      <div className="flex flex-col items-center  gap-6 py-6 text-white">
      <Link className=" p-1 font-medium text-white text-neon-glow no-underline"  href='/'>Home</Link>
      <Link className=" p-1 font-medium text-white text-neon-glow no-underline"  href='/AboutPage'>About</Link>
      <Link className=" p-1 font-medium text-white text-neon-glow no-underline"  href='/Events'>Events</Link>
      <Link className=" p-1 font-medium text-white text-neon-glow no-underline"  href='/Schedules'>Schedules</Link>

      
      <Link className=" p-1 font-medium text-white text-neon-glow no-underline"  href='/GalleryPage'>Gallery</Link>
      <Link className=" p-1 font-medium text-white text-neon-glow no-underline"  href='/Partners'>Partners</Link>
      <Link className=" p-1 font-medium text-white text-neon-glow no-underline"  href='/ContactUs'>Contact  Us</Link>
      <a href='https://forms.gle/GtswDucZwmD81DqcA'><button className='registerbutton1'>Register</button></a>
      </div>
      </div>
  </motion.nav>
)
};

export default Navbar;





