'use client';

import { motion } from 'framer-motion';
import { socials } from './constants';
import Image from 'next/image';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Metaverse
        </h4>
        <a href="/"><div><button className='registerbutton1 rounded-[32px] gap-[12px]'>Register</button></div></a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
        <Image
            src="/bl-wh-innov-2024logo.png"
            alt="headset"  width={0} height={0}
            className="w-[380px] h-[260px] object-contain"
          />
          
          <p className="font-normal text-[14px] text-white opacity-50">
            © Copyright INNOVACIÓN 2024. All Rights Reserved
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <Image
                key={social.name}
                src={social.url}
                alt={social.name} width={0} height={0}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
