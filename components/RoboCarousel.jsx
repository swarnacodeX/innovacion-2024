// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import styles from '../styles';
import Image from 'next/image';
import { TitleText } from '.';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import admania from  '../public/rulebook/ADMANIA RuleBook.pdf';


const RoboCarousel = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTE } = await import("tw-elements");
      initTE({ Carousel });
    };
    init();
  }, []);
  const [loading, setLoading] = useState(false);

  const PDFADMNIA = async () => {
    setLoading(true);
    try {
      // Fetch the PDF file from the server or external source
      const response = await fetch('/rulebook/ADMANIA RuleBook.pdf'); // Replace with the actual path to your PDF file
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      // Set the href attribute to the Blob object representing the PDF file
      link.href = window.URL.createObjectURL(new Blob([blob]));
      // Set the download attribute to specify the filename
      link.download = 'admania-rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file
      // Append the link to the document body
      document.body.appendChild(link);
      // Programmatically trigger the click event on the link
      link.click();
      // Remove the link from the document body
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    } finally {
      setLoading();
    }
  };
  const PDFBGMI = async () => {
    setLoading(true);
    try {
      // Fetch the PDF file from the server or external source
      const response = await fetch('/rulebook/BGMI RuleBook.pdf'); // Replace with the actual path to your PDF file
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      // Set the href attribute to the Blob object representing the PDF file
      link.href = window.URL.createObjectURL(new Blob([blob]));
      // Set the download attribute to specify the filename
      link.download = 'BGMI-rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file
      // Append the link to the document body
      document.body.appendChild(link);
      // Programmatically trigger the click event on the link
      link.click();
      // Remove the link from the document body
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    } finally {
      setLoading();
    }
  };
  const PDFCODEBREAK = async () => {
    setLoading(true);
    try {
      // Fetch the PDF file from the server or external source
      const response = await fetch('/rulebook/CODEBREAK ODYSSEY RuleBook.pdf'); // Replace with the actual path to your PDF file
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      // Set the href attribute to the Blob object representing the PDF file
      link.href = window.URL.createObjectURL(new Blob([blob]));
      // Set the download attribute to specify the filename
      link.download = 'CODEBREAK-rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file
      // Append the link to the document body
      document.body.appendChild(link);
      // Programmatically trigger the click event on the link
      link.click();
      // Remove the link from the document body
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    } finally {
      setLoading();
    }
  };
  const PDFCODESPHERE = async () => {
    setLoading(true);
    try {
      // Fetch the PDF file from the server or external source
      const response = await fetch('/rulebook/CODESPHERE RuleBook.pdf'); // Replace with the actual path to your PDF file
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      // Set the href attribute to the Blob object representing the PDF file
      link.href = window.URL.createObjectURL(new Blob([blob]));
      // Set the download attribute to specify the filename
      link.download = 'CODESPHERE-rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file
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
  const PDFEUREKA = async () => {
    try {
        setLoading(true);
        // Fetch the PDF file from the server or external source
        const response = await fetch('/rulebook/EUREKA RuleBook.pdf'); // Replace with the actual path to your PDF file
        const blob = await response.blob();

        // Create a temporary link element
        const link = document.createElement('a');
        const url = window.URL.createObjectURL(blob);

        // Set the href attribute to the Blob object representing the PDF file
        link.href = url;
        // Set the download attribute to specify the filename
        link.download = 'EUREKA-rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file

        // Append the link to the document body
        document.body.appendChild(link);

        // Programmatically trigger the click event on the link
        link.click();

        // Cleanup
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading PDF:', error);
    } finally {
        setLoading(false);
    }
};

const PDFFIFA = async () => {
  try {
      setLoading(true);
      // Fetch the PDF file from the server or external source
      const response = await fetch('/rulebook/FIFA RuleBook.pdf'); // Replace with the actual path to your PDF file
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      const url = window.URL.createObjectURL(blob);

      // Set the href attribute to the Blob object representing the PDF file
      link.href = url;
      // Set the download attribute to specify the filename
      link.download = 'FIFA-rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file

      // Append the link to the document body
      document.body.appendChild(link);

      // Programmatically trigger the click event on the link
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
  } catch (error) {
      console.error('Error downloading PDF:', error);
  } finally {
      setLoading(false);
  }
};
const PDFHELLINACELL = async () => {
  try {
      setLoading(true);
      // Fetch the PDF file from the server or external source
      const response = await fetch('/rulebook/EUREKA RuleBook.pdf'); // Replace with the actual path to your PDF file
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      const url = window.URL.createObjectURL(blob);

      // Set the href attribute to the Blob object representing the PDF file
      link.href = url;
      // Set the download attribute to specify the filename
      link.download = 'EUREKA-rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file

      // Append the link to the document body
      document.body.appendChild(link);

      // Programmatically trigger the click event on the link
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
  } catch (error) {
      console.error('Error downloading PDF:', error);
  } finally {
      setLoading(false);
  }
};
const PDFPIXEL = async () => {
  try {
      setLoading(true);
      // Fetch the PDF file from the server or external source
      const response = await fetch('/rulebook/PIXEL PIONEER RuleBook.pdf'); // Replace with the actual path to your PDF file
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      const url = window.URL.createObjectURL(blob);

      // Set the href attribute to the Blob object representing the PDF file
      link.href = url;
      // Set the download attribute to specify the filename
      link.download = 'PIXELPIONEER-rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file

      // Append the link to the document body
      document.body.appendChild(link);

      // Programmatically trigger the click event on the link
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
  } catch (error) {
      console.error('Error downloading PDF:', error);
  } finally {
      setLoading(false);
  }
};
const PDFQUIZ = async () => {
  try {
      setLoading(true);
      // Fetch the PDF file from the server or external source
      const response = await fetch('/rulebook/QUIZ CRUSADE RuleBook.pdf'); // Replace with the actual path to your PDF file
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      const url = window.URL.createObjectURL(blob);

      // Set the href attribute to the Blob object representing the PDF file
      link.href = url;
      // Set the download attribute to specify the filename
      link.download = 'QUIZ CRUSADE-rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file

      // Append the link to the document body
      document.body.appendChild(link);

      // Programmatically trigger the click event on the link
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
  } catch (error) {
      console.error('Error downloading PDF:', error);
  } finally {
      setLoading(false);
  }
};
const PDFBULL = async () => {
  try {
      setLoading(true);
      // Fetch the PDF file from the server or external source
      const response = await fetch('/rulebook/THE BULL MASTER RuleBook.pdf'); // Replace with the actual path to your PDF file
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      const url = window.URL.createObjectURL(blob);

      // Set the href attribute to the Blob object representing the PDF file
      link.href = url;
      // Set the download attribute to specify the filename
      link.download = 'THE-BULL-MASTER-rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file

      // Append the link to the document body
      document.body.appendChild(link);

      // Programmatically trigger the click event on the link
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
  } catch (error) {
      console.error('Error downloading PDF:', error);
  } finally {
      setLoading(false);
  }
};
  const PDFVALIANTS = async () => {
    setLoading(true);
    try {
      // Fetch the PDF file from the server or external source
      const response = await fetch('public/rulebook/VALIANTS RuleBook.pdf'); // Replace with the actual path to your PDF file
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      // Set the href attribute to the Blob object representing the PDF file
      link.href = window.URL.createObjectURL(new Blob([blob]));
      // Set the download attribute to specify the filename
      link.download = 'VALIANTS-rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file
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
  const PDFHACKAI = async () => {
    setLoading(true);
    try {
      // Fetch the PDF file from the server or external source
      const response = await fetch('/rulebook/HACK-AI RuleBook 1.pdf'); // Replace with the actual path to your PDF file
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      // Set the href attribute to the Blob object representing the PDF file
      link.href = window.URL.createObjectURL(new Blob([blob]));
      // Set the download attribute to specify the filename
      link.download = 'HACK-AI-rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file
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
  const PDFROBO = async () => {
    setLoading(true);
    try {
      // Fetch the PDF file from the server or external source
      const response = await fetch('/rulebook/ROBOPACE Rule book.pdf'); // Replace with the actual path to your PDF file
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      // Set the href attribute to the Blob object representing the PDF file
      link.href = window.URL.createObjectURL(new Blob([blob]));
      // Set the download attribute to specify the filename
      link.download = 'ROBOPACE rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file
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
  const PDFTRACKER = async () => {
    setLoading(true);
    try {
      // Fetch the PDF file from the server or external source
      const response = await fetch('/rulebook/TRACKER RuleBook.pdf'); // Replace with the actual path to your PDF file
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      // Set the href attribute to the Blob object representing the PDF file
      link.href = window.URL.createObjectURL(new Blob([blob]));
      // Set the download attribute to specify the filename
      link.download = 'Tracker rulebook.pdf'; // Replace with the desired filename for the downloaded PDF file
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
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="4"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 5"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="5"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 6"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="6"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 7"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="7"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 8"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="8"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 9"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="9"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 10"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="10"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 11"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="11"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 12"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="12"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 13"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="13"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 14"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="14"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 15"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="15"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 16"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="16"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 17"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="17"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 18"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="18"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 19"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="19"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 20"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="20"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 21"></button>
    
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="21"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 22"></button>

  </div>


  <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    <div
      className="relative float-left -mr-[100%] w-full  !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
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
            TRACKER
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Robotics
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “Enter the Tracker Arena, where robots with unmatched line-following skills compete fiercely. Precision, strategy, and innovation collide in this electrifying quest for victory!"

        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/Tracker.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
          onClick={PDFTRACKER}
            src="/5.png"
            alt="stamp" width={155}
            height={155}
            className="w-[155px] h-[155px] object-contain"
          />
         
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
          onClick={PDFTRACKER}
            src="/5.png"
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
            ROBOPACE
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Robotics
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Experience the ultimate fusion of robotics and adrenaline in the X-Race & Robofooties Extravaganza! Witness sleek robots conquer challenging courses and teams battle for football supremacy."
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/Robopace.jpg"
          alt="planet-09" width={900} height={550}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
          onClick={PDFROBO}
            src="/5.png"
            alt="stamp" width={900} height={550}
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
          onClick={PDFROBO}
            src="/5.png"
            alt="stamp" width={155}
            height={155}
            className="w-[155px] h-[155px] object-contain"
          /></motion.div>
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
            HELL IN A CELL
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Robotics
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “Step into the chaos of Hell in a Cell, where weaponized robots battle relentlessly for supremacy. Witness ruthless destruction and strategic prowess as they vie for victory in this adrenaline-fueled spectacle!”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/hellinacell.webp"
          alt="planet-09" width={900} height={550}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
          onClick={PDFHELLINACELL}
            src="/5.png"
            alt="stamp" width={155} height={155}
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
          onClick={PDFHELLINACELL}
            src="/5.png"
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
            PIXELPIONEER
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Hackathon
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Dive into the dynamic UI/UX design world at our Hackathon. Show your talent and passion for crafting user-centric experiences. Join us for collaborative problem-solving and shape the future of design!"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/PixelPioneer.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden  absolute -left-[10%] top-[3%]"
        >
          <Image
          onClick={PDFPIXEL}
            src="/4.png"
            alt="stamp" width={155} height={155}
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
          onClick={PDFPIXEL}
            src="/4.png"
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
            CYBERTHON
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Hackathon
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Get ready for Cyberthon, the ultimate Ethical Hacking Hackathon! Compete in security challenges, win prizes, and showcase your cybersecurity skills. Join us where ethical hacking meets innovation! Welcome to Cyberthon!"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/Cyberthon.JPG"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
            src="/4.png"
            alt="stamp" width={15} height={15}
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
            src="/4.png"
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
            360CODECRAFT
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Hackathon
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Join us for an immersive journey through software and web development. From UI/UX design to server-side scripting, master every facet. Whether seasoned or new, hone your skills with us! Welcome!"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/360CodeCraft.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
            src="/4.png"
            alt="stamp" width={155} height={155}
            className="w-[155px] h-[155px] object-contain"
          />
          
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
            src="/4.png"
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
          CODEBREAK ODYSSEY
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Hackathon
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Embark on a transformative coding journey, unlocking problem-solving prowess and deepening code structure understanding. Join us for an enriching experience, fostering resilience, adaptability, and excellence in technology and innovation! Welcome!"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/codebreak.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
          onClick={PDFCODEBREAK}
            src="/4.png"
            alt="stamp" width={155} height={155}
            className="w-[155px] h-[155px] object-contain"
          /></motion.div>
           <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-30%]"
        >
          <Image
          onClick={PDFCODEBREAK}
            src="/4.png"
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
          CODESPHERE
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Hackathon
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Get ready for thrilling coding challenges designed to stretch your capabilities and broaden expertise. Join us for an immersive experience where every challenge sharpens skills and leads to mastery! Welcome to coding excellence!"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
        
          src="/codesphere.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
           onClick={PDFCODESPHERE}
            src="/4.png"
            alt="stamp" width={10} height={10}
            className="w-[155px] h-[155px] object-contain"
          />
          
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
          onClick={PDFCODESPHERE}
            src="/4.png"
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
          HACK-AI
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Hackathon
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Get ready for the biggest techfest of Kolkata - Innovación 2024! Join our 24-Hour in-person Hackathon focusing on AI. All levels welcome. Builders, creators, and innovators, this is for you!"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="\Hackai.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
          onClick={PDFHACKAI}
            src="/4.png"
            alt="stamp" width={10} height={10}
            className="w-[155px] h-[155px] object-contain"
          />

        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-35%]"
        >
          <Image
          onClick={PDFHACKAI}
            src="/4.png"
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
          AD-MANIA
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Management
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Welcome to 'Ad-Mania' at Innovación 2024, Kolkata's biggest techfest! Unleash your creativity in advertising. Join us as imagination meets innovation on the grand stage!"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/ad-mania.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        ><a href={admania} download="Admania Rulebook">
          <Image
           onClick={PDFADMNIA}
            src="/2.png"
            alt="stamp" width={15} height={15}
            className="w-[155px] h-[155px] object-contain"
          /></a>
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
          onClick={PDFADMNIA}
            src="/2.png"
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
          EUREKA
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Management
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Welcome to Innovación 2024, Kolkata's techfest! The IEM Entrepreneurship Cell inspires self-employment and innovation. Join us for entrepreneurship and innovation."
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/eureka.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
          onClick={PDFEUREKA}
            src="/2.png"
            alt="stamp"width={15} height={15}
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
           onClick={PDFEUREKA}
            src="/2.png"
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
          THE BULL MASTER
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Management
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Unlock the secrets of the stock market at The Bull Master - The Stock Market Challenge of Innovación 2024! Learn, experience, and win exciting prizes. Join us and master the art of trading!"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/tbm.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
          onClick={PDFBULL}
            src="/2.png"
            alt="stamp" width={15} height={15}
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
          onClick={PDFBULL}
            src="/2.png"
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
          BGMI CHAMPIONSHIP
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Gaming
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Get ready for the ultimate gaming showdown at Innovación 2024! Join the BGMI Gaming Extravaganza and experience the thrill of battle. Show off your skills and compete against the best for exciting prizes!"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/BGMI.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
          onClick={PDFBGMI}
            src="/1.png" 
            alt="stamp" width={15} height={15}
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
           onClick={PDFBGMI}
            src="/1.png"
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
          VALIANTS
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Gaming
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Get ready to dive into the heart-pounding world of Valorant at Innovación 2024, Kolkata's biggest techfest! Showcase your skills, teamwork, and strategy in an electrifying gaming showdown. Welcome to Valiants!"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/VALIANTS.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
          onClick={PDFVALIANTS}
            src="/1.png"
            alt="stamp"width={15} height={15}
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
          onClick={PDFVALIANTS}
            src="/1.png"
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
          FIFA
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Gaming
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Get ready to experience the thrill of virtual football at Innovación 2024, Kolkata's biggest techfest! Join us for FIFA gaming where the spirit of friendly competition meets the excitement of the game. Welcome to FIFA!"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/FIFA.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
          onClick={PDFFIFA}
            src="/1.png"
            alt="stamp" width={15} height={15}
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
          onClick={PDFFIFA}
            src="/1.png"
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
          MATHEMAGIC
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Others
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Welcome to Mathemagic at Innovación 2024! Dive into the world of mathematics, unravel mysteries, and compete in friendly spirit. Discover the beauty of math!"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/MATH.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
          onClick={PDFMATH}
            src="/3.png"
            alt="stamp" width={15} height={15}
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
          onClick={PDFMATH}
            src="/3.png"
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
          IIISO
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Others
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Welcome to the ultimate test of analytical, logical, and critical thinking at Innovación 2024! Showcase your prowess in Physics, Chemistry, and Biology. Join us in unraveling mysteries and demonstrating intellectual mettle. Welcome to a competition where the pursuit of knowledge knows no bounds!"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/IIISO.jpg"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
            src="/3.png"
            alt="stamp" width={15} height={15}
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
            src="/3.png"
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
          QUIZ-CRUSADE
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Others
            </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        "Gear up for the largest quiz competition yet at Innovación 2024! Assemble your team and prepare for fierce competition across various topics. Join us for an exhilarating battle of intellect and strategy! Are you ready?"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/QUIZ.png"
          alt="planet-09" width={155} height={155}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
          onClick={PDFQUIZ}
            src="/3.png"
            alt="stamp" width={15} height={15}
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block absolute -left-[-55%] top-[-40%]"
        >
          <Image
          onClick={PDFQUIZ}
            src="/3.png"
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

export default RoboCarousel;




