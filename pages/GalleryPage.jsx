// pages/gallery.js
'use client';

import {Gallery} from '../components';

const galleryImages = [
  { src:"../asd/01.jpg", alt: 'Image 1' },
  { src: "../asd/02.jpg", alt: 'Image 2' },
  { src: "../asd/03.jpg", alt: 'Image 3' },
  { src: "../asd/04.jpg", alt: 'Image 3' },
  { src: "../asd/05.jpg", alt: 'Image 3' },
  { src: "../asd/06.jpg", alt: 'Image 3' },
  { src: "../asd/07.jpg", alt: 'Image 3' },
  { src: "../asd/08.jpg", alt: 'Image 3' },
  { src: "../asd/09.jpg", alt: 'Image 3' },
  { src: "../asd/10.jpg", alt: 'Image 3' },
  { src: "../asd/11.jpg", alt: 'Image 3' },
  { src: "../asd/12.jpg", alt: 'Image 3' },
  { src: "../asd/13.jpg", alt: 'Image 3' },
  { src: "../asd/14.jpg", alt: 'Image 3' },
  { src: "../asd/15.jpg", alt: 'Image 3' },
  { src: "../asd/16.jpg", alt: 'Image 3' },
  { src: "../asd/17.jpg", alt: 'Image 3' },
  { src: "../asd/18.jpg", alt: 'Image 3' },
  { src: "../asd/19.jpg", alt: 'Image 3' },
  { src: "../asd/20.jpg", alt: 'Image 3' },
  { src: "../asd/21.jpg", alt: 'Image 3' },
  { src: "../asd/22.jpg", alt: 'Image 3' },
  { src: "../asd/23.jpg", alt: 'Image 3' },
  { src: "../asd/24.jpg", alt: 'Image 3' },
  { src: "../asd/25.jpg", alt: 'Image 3' },
  { src: "../asd/26.jpg", alt: 'Image 3' },
  { src: "../asd/27.jpg", alt: 'Image 3' },
  { src: "../asd/28.jpg", alt: 'Image 3' },
  { src: "../asd/29.jpg", alt: 'Image 3' },
  { src: "../asd/30.jpg", alt: 'Image 3' },
  { src: "../asd/31.jpg", alt: 'Image 3' },
  { src: "../asd/32.jpg", alt: 'Image 3' },
  { src: "../asd/33.jpg", alt: 'Image 3' },
  { src: "../asd/34.jpg", alt: 'Image 3' },
  { src: "../asd/35.jpg", alt: 'Image 3' },
  { src: "../asd/36.jpg", alt: 'Image 3' },
  { src: "../asd/37.jpg", alt: 'Image 3' },
  { src: "../asd/38.jpg", alt: 'Image 3' },
  { src: "../asd/39.jpg", alt: 'Image 3' },
  { src: "../asd/40.jpg", alt: 'Image 3' },
  { src: "../asd/41.jpg", alt: 'Image 3' },
  { src: "../asd/42.jpg", alt: 'Image 3' },
  { src: "../asd/43.jpg", alt: 'Image 3' },
  { src: "../asd/44.jpg", alt: 'Image 3' },
  { src: "../asd/45.jpg", alt: 'Image 3' },
  { src: "../asd/46.jpg", alt: 'Image 3' },


  // Add more image data as needed
];

const GalleryPage = () => {
  return (
    
    <div className="max-w-screen-lg mx-auto">
      
      <Gallery  images={galleryImages}  />
    </div>
  );
};

export default GalleryPage;
