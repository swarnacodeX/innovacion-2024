'use client';
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';
import styles from '../styles';
import { navVariants } from '../utils/motion';

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="white" className="p-1 font-medium">
        <Link href="/" className=" p-1 font-medium text-white text-neon-glow no-underline" passHref>
         
        </Link></Typography>
      <Typography as="li" variant="small" color="white" className="p-1 font-medium">
        <Link href="/AboutPage" className="text-white text-neon-glow no-underline" passHref>
         About
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <Link href='/Events' className="text-white text-neon-glow no-underline" passHref>
          Events
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <Link href='/Schedules'  className="text-white text-neon-glow no-underline" passHref>
          Schedules
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <Link href='/GalleryPage' className="text-white text-neon-glow no-underline" passHref>
          Gallery
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <Link href='/Partners' className="text-white text-neon-glow no-underline" passHref>
          Partners
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <Link href='/ContactUs' className="text-white text-neon-glow no-underline" passHref>
        
          ContactUs
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium"><button className="register-hov">
        <Link href='https://forms.gle/GtswDucZwmD81DqcA'className="text-white hover:text-white-900 transition-colors no-underline" passHref>
          Register
        </Link></button>
      </Typography>
    </ul>
  );
}

const NavbarSimple = () => {
  const [openNav, setOpenNav] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleWindowResize = () => {
    setShowMobileNav(window.innerWidth < 960);
    setOpenNav(false); // Close the mobile nav when resizing to desktop view
  };

  useEffect(() => {
    handleWindowResize(); // Call the handler initially
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
      <Navbar className="mx-auto max-w-screen-xl px-6 py-3 bg-transparent flex items-center justify-between ">
        <Image src="/IEM.png" alt="headset" width={0} height={0} className="lg:w-[140px] lg:h-[140px] width:0 xs:w-[65px] xs:h-[65px] object-contain" />
        <div className="flex items-center py-6 text-white-900 opacity-100">
          <div className="hidden lg:block">
            <NavList />
          </div>
        </div>
        <Link href='/'>
          <Image src="/innovacion2k24-logo.png" alt="headset" width={0} height={0} className="lg:w-[140px] lg:h-[200px] xs:w-[100px] xs:h-[100px] object-contain" />
        </Link>
        {showMobileNav && (
          <div className="hidden md:hidden lg:hidden xs:block xs:ml-auto">
            {openNav ? (
              <XMarkIcon onClick={() => setOpenNav(!openNav)} className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon onClick={() => setOpenNav(!openNav)} className="h-6 w-6" strokeWidth={2} />
            )}
          </div>
        )}
      </Navbar>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </motion.nav>
  );
}

export default NavbarSimple;

