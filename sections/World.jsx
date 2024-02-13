'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import Carousel from '../components/Carousel';


const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| INNNOVACION Gallery" textStyles="text-center" />
      <TitleText
        title={(
          <>Here, you can explore all the captivating and mesmerizing moments of IEM-INNOVACION </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[580px]"
      >
        <Carousel/>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
