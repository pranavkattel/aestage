import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ScrollingGallery from './ScrollingGallery';

const Experience: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="experience" 
      ref={ref}
      className="py-section-md md:py-section-lg bg-primary-bg"
    >
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className={`text-center transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="mb-4">
            The Experience
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A glimpse inside our sanctuary of style and transformation
          </p>
        </div>
      </div>

      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <ScrollingGallery />
      </div>
    </section>
  );
};

export default Experience;