import React from 'react';
import { galleryImages } from '../utils/constants';

const ScrollingGallery: React.FC = () => {
  // Duplicate the images to create a seamless loop
  const extendedImages = [...galleryImages, ...galleryImages];

  return (
    <div 
      className="w-full overflow-hidden relative group"
      style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
    >
      <div className="flex animate-scroll group-hover:pause">
        {extendedImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-64 md:w-80 mx-4">
            <div className="aspect-[4/5] rounded-md overflow-hidden shadow-medium">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingGallery;
