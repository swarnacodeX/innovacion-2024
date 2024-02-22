'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { newFeatures } from '../components/constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import styles from '../styles';
import { startingFeatures } from '../components/constants';
import { StartSteps } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => {
return (
      <section className={`${styles.paddings} relative z-10`} id="regis">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
          <motion.div
            variants={planetVariants('left')}
            className={`flex-1 ${styles.flexCenter}`}
          >
            <img
              src="/central.png"
              alt="get-started"
              className="w-[100%] h-[100%] object-contain"
            />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            <TypingText title="| How to Register" />
            <TitleText title={<>Central Registration</>} />
            <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
            <br />
            <div>
            <Link href='https://forms.gle/GtswDucZwmD81DqcA'>
            <button class="bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            REGISTER <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </button>
            </Link>
          

            </div>
          </motion.div>
        </motion.div>
      </section>
    );
}

export default GetStarted;
