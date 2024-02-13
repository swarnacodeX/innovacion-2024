'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/home.css';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} px-3 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-left gap-2`}>

     <Image
        src="/IEM.png" width={160} height={160}
        className="object-contain"
      />
      </div>
      <div className="menu">
      <Link href='/'><div className='homebutton'>Home</div></Link>
      <Link href='/AboutPage'><div className='aboutbutton'>About</div></Link>
      <Link href='/Events'><div className='eventsbutton'>Events</div></Link>
      <Link href='/Schedules'><div className='schedulebutton'>Schedules</div></Link>

      
      <Link href='/GalleryPage'><div className='gallerybutton'>Gallery</div></Link>
      <Link href='/Partners'><div className='partnersbutton'>Partners</div></Link>
      <Link href='/ContactUs'><div className='contactusbutton'>Contact Us</div></Link>
      <a href="#regis"><div className='registerbutton'><button className='registerbutton1'>Register</button></div></a>
      </div>
  </motion.nav>
);

export default Navbar;





