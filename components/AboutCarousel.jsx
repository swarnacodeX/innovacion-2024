"use client";
import Image from 'next/image';
import { useEffect } from "react";

const AboutCarousel = () => {
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
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active>
          <Image
            src="/asd/101.jpg"
            className="block w-full"
            alt="Wild Landscape"  width={1200} height={550} />
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/102.jpg"
            className="block w-full"
            alt="Camera"   width={1200} height={550}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/103.jpg"
            className="block w-full"
            alt="Exotic Fruits"  width={1200} height={550}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/104.jpg"
            className="block w-full"
            alt="Camera"   width={1200} height={550}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/105.jpg"
            className="block w-full"
            alt="Camera"   width={1200} height={550}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/106.jpg"
            className="block w-full"
            alt="Camera"   width={1200} height={550}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/107.jpg"
            className="block w-full"
            alt="Camera"   width={1200} height={550}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/108.jpg"
            className="block w-full"
            alt="Camera"   width={1200} height={550}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/109.jpg"
            className="block w-full"
            alt="Camera"   width={1200} height={550}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/110.jpg"
            className="block w-full"
            alt="Camera"   width={1200} height={550}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/111.jpg"
            className="block w-full"
            alt="Camera"  width={1200} height={550}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/112.jpg"
            className="block w-full"
            alt="Camera"  width={1200} height={550}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/113.jpg"
            className="block w-full"
            alt="Camera"   width={1200} height={550}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/114.jpg"
            className="block w-full"
            alt="Camera" width={1200} height={550}/>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <Image
            src="/asd/115.jpg"
            className="block w-full"
            alt="Camera"  width={1200} height={550}/>
        </div>
      
      </div>

      
    
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-transparent p-0 text-center text-white bg-opacity-50 transition-opacity duration-250 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
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
          >Previous</span
        >
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

export default AboutCarousel;
