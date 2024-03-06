// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import styles from '../styles';
import Image from 'next/image';
import { TitleText } from '.';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const ExhibitionCarousel = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTE } = await import("tw-elements");
      initTE({ Carousel });
    };
    init();
  }, []);
  const [loading, setLoading] = useState(false);
  const PDFIIISO = async () => {
    setLoading(true);
    try {
      // Fetch the PDF file from the server or external source
      const response = await fetch('/rulebook/IIISO RuleBook.pdf'); // Replace with the actual path to your PDF file
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      // Set the href attribute to the Blob object representing the PDF file
      link.href = window.URL.createObjectURL(new Blob([blob]));
      // Set the download attribute to specify the filename
      link.download = 'IIISO Rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file
      // Append the link to the document body
      document.body.appendChild(link);
      // Programmatically trigger the click event on the link
      link.click();
      // Remove the link from the document body
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    } finally {
      setLoading(false);
    }
  };
  const PDFAPERTURE = async () => {
    setLoading(true);
    try {
      // Fetch the PDF file from the server or external source
      const response = await fetch('/rulebook/APERTURE RuleBook.pdf'); // Replace with the actual path to your PDF file
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      // Set the href attribute to the Blob object representing the PDF file
      link.href = window.URL.createObjectURL(new Blob([blob]));
      // Set the download attribute to specify the filename
      link.download = 'APERTURE Rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file
      // Append the link to the document body
      document.body.appendChild(link);
      // Programmatically trigger the click event on the link
      link.click();
      // Remove the link from the document body
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    } finally {
      setLoading(false);
    }
  };
  const PDFINNOVARE = async () => {
    setLoading(true);
    try {
      // Fetch the PDF file from the server or external source
      const response = await fetch('/rulebook/INNOVARE and SCIENCE Model Exhibition.pdf'); // Replace with the actual path to your PDF file
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      // Set the href attribute to the Blob object representing the PDF file
      link.href = window.URL.createObjectURL(new Blob([blob]));
      // Set the download attribute to specify the filename
      link.download = 'Innovare and Science model exhibition rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file
      // Append the link to the document body
      document.body.appendChild(link);
      // Programmatically trigger the click event on the link
      link.click();
      // Remove the link from the document body
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    } finally {
      setLoading(false);
    }
  };
  const PDFELECTROSLIDES = async () => {
    setLoading(true);
    try {
      // Fetch the PDF file from the server or external source
      const response = await fetch('/rulebook/ELECTROSLIDES RuleBook.pdf'); // Replace with the actual path to your PDF file
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      // Set the href attribute to the Blob object representing the PDF file
      link.href = window.URL.createObjectURL(new Blob([blob]));
      // Set the download attribute to specify the filename
      link.download = 'ELECTROSLIDES Rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file
      // Append the link to the document body
      document.body.appendChild(link);
      // Programmatically trigger the click event on the link
      link.click();
      // Remove the link from the document body
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    
<div
  id="carouselExampleCrossfade"
  className="relative"
  data-te-carousel-init
  data-te-ride="carousel">
  
  <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6 mt-[100px]`}
    > <TitleText
    title={(
      <>EVENTS</>
    )}
    textStyles="text-center"
  /></motion.div>
  
  <div
    className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-te-carousel-indicators>
    
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="0"
      data-te-carousel-active
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="1"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="2"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="3"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 4"></button>
   
  </div>


  <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
   
    <div
      className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item
      data-te-carousel-active>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            SCIENCE MODEL EXHIBITION
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Exhibition
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Join our innovative event for school students! Share ideas and projects, get support from peers and faculty,
         and shape the future of technology together."
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/sme.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

<motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
           onClick={PDFINNOVARE}
            src="/6.png"
            alt="stamp" width={155} height={155}
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
           onClick={PDFINNOVARE}
            src="/6.png"
            alt="stamp" width={155}
            height={155}
            className="w-[155px] h-[155px] object-contain"
          />
          </motion.div>
      </motion.div>
     </motion.div> 
    </div>
   

 

    <div
      className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            INNOVARE
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Exhibition
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "They say the best things are crafted by hand. At Innovacion 2024, we believe the same. That's why we present Innovare, the model-making competition designed to ignite your imagination and transform your dreams into reality."
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/innovare.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

<motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
           onClick={PDFINNOVARE}
            src="/6.png"
            alt="stamp" width={155} height={155}
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
           onClick={PDFINNOVARE}
            src="/6.png"
            alt="stamp" width={155}
            height={155}
            className="w-[155px] h-[155px] object-contain"
          />
          </motion.div>
      </motion.div>
     </motion.div> 
    </div>

    <div
      className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            ELECTROSLIDES
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Exhibition
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Don't miss ELECTROSLIDES 2024, an international paper-presentation event by IEM Innovacion. Showcase your electrical engineering research to global experts. Opportunity awaits!"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/electroslides.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

<motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
           onClick={PDFELECTROSLIDES}
            src="/6.png"
            alt="stamp" width={155} height={155}
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
           onClick={PDFELECTROSLIDES}
            src="/6.png"
            alt="stamp" width={155}
            height={155}
            className="w-[155px] h-[155px] object-contain"
          />
          </motion.div>
      </motion.div>
     </motion.div> 
    </div>

    <div
      className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            APERTURE
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Exhibition
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Step into a haven for storytellers behind the lens. Capture fleeting moments and celebrate the art of photography, where every frame tells a compelling story. Join us in immortalizing life's beauty!"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/aperture.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

<motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
           onClick={PDFAPERTURE}
            src="/6.png"
            alt="stamp" width={155} height={155}
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
           onClick={PDFAPERTURE}
            src="/6.png"
            alt="stamp" width={155}
            height={155}
            className="w-[155px] h-[155px] object-contain"
          />
          </motion.div>
      </motion.div>
     </motion.div> 
    </div>
    
    
    </div>
    
    
  <button
    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-transparent p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCrossfade"
    data-te-slide="prev">
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span>
  </button>

  <button
    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-transparent p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCrossfade"
    data-te-slide="next">
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
  </button>
</div>
  );
};

export default ExhibitionCarousel;




