// pages/gallery.js
'use client';

import {PartnersPageImages} from '../components';

const PartnersImages = [
  { src:"../partnerlogo/genericlogos/2.png", alt: 'Image 1' },
  { src: "../partnerlogo/genericlogos/3.png", alt: 'Image 2' },
  { src: "../partnerlogo/genericlogos/4.png", alt: 'Image 3' },
  { src: "../partnerlogo/genericlogos/5.png", alt: 'Image 3' },
  { src: "../partnerlogo/otherlogos/1.png", alt: 'Image 3' },
  { src: "../partnerlogo/otherlogos/2.png", alt: 'Image 3' },
  { src: "../partnerlogo/otherlogos/3.png", alt: 'Image 3' },
  { src: "../partnerlogo/otherlogos/4.png", alt: 'Image 3' },
  { src: "../partnerlogo/otherlogos/5.png", alt: 'Image 3' },
  { src: "../partnerlogo/otherlogos/6.png", alt: 'Image 3' },
  { src: "../partnerlogo/otherlogos/7.png", alt: 'Image 3' },
  { src: "../partnerlogo/otherlogos/HAQUE ELECTRONICS.png", alt: 'Image 3' },
  { src: "../partnerlogo/otherlogos/9.png", alt: 'Image 3' },
  { src: "../partnerlogo/otherlogos/10.png", alt: 'Image 3' },
  { src: "../partnerlogo/otherlogos/11.png", alt: 'Image 3' },
  { src: "../partnerlogo/otherlogos/12.png", alt: 'Image 3' },
  
];

const Partners = () => {
  return (
    
    <div className="max-w-screen-lg mx-auto">
      
      <PartnersPageImages  images={PartnersImages}  />
    </div>
  );
};

export default Partners;