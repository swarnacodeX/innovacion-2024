"use client";
import { useEffect } from "react";

import Image from 'next/image';

const Carousel = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTE } = await import("tw-elements");
      initTE({ Carousel });
    };
    init();
  }, []);

  return (
    <div
      id="carouselExampleControls"
      className="relative"
      data-te-carousel-init
      data-te-ride="carousel">

      <div
        className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
  
        <div
          className="relative float-start -mr-[100%] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active>
          <Image
            src="/asd/08.jpg"
            className="block w-auto"
            alt="Wild Landscape"  width={900} height={500}
            objectFit="cover" />
        </div>

        <div
          className="relative float-start -mr-[100%] hidden  transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/46.jpg"
            className="block w-full"
            alt="Camera"  width={900} height={505} />
        </div>

        <div
          className="relative float-start -mr-[100%] hidden  transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/29.jpg"
            className="block w-full"
            alt="Exotic Fruits"  width={900} height={505} />
        </div>

        <div
          className="relative float-left -mr-[100%] hidden  transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/02.jpg"
            className="block w-full"
            alt="Camera"   width={805} height={505}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden  transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/48.jpg"
            className="block w-full"
            alt="Camera"   width={900} height={505}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-3/4 transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/36.jpg"
            className="block w-full"
            alt="Camera"  width={900} height={505} />
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-3/4 transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/25.jpg"
            className="block w-full"
            alt="Camera"  width={805} height={505} />
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-3/4 transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/15.jpg"
            className="block w-full"
            alt="Camera"  width={805} height={505} />
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-3/4 transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/24.jpg"
            className="block w-full"
            alt="Camera"  width={805} height={505} />
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-3/4 transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/47.jpg"
            className="block w-full"
            alt="Camera"   width={900} height={505}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-3/4 transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/49.jpg"
            className="block w-full"
            alt="Camera"  width={805} height={505} />
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-3/4  transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/42.jpg"
            className="block w-full"
            alt="Camera"  width={805} height={505} />
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/43.jpg"
            className="block w-full"
            alt="Camera"  width={805} height={505}/>
            
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/16.jpg"
            className="block w-full"
            alt="Camera"   width={805} height={505}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/11.jpg"
            className="block w-full"
            alt="Camera"   width={805} height={505}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/32.jpg"
            className="block w-full"
            alt="Camera"   width={805} height={505}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/34.jpg"
            className="block w-full"
            alt="Camera"   width={805} height={505}/>
        </div>
      
      </div>

      
    
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-transparent
         p-0 text-center text-white bg-opacity-50 transition-opacity duration-250 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] 
         hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 
         focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleControls"
        data-te-slide="prev">
        <span className="inline-block h-8 w-8">
        <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="h-8 w-8">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
        </span>
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Previous</span>
      </button>

      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-transparent p-0 text-center text-white transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline  hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleControls"
        data-te-slide="next">
        <span className="inline-block h-8 w-8">
        <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="h-8 w-8">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
        </span>
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Next</span>
      </button>
    </div>
  );
};

export default Carousel;
