import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Philosophy: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="philosophy" 
      ref={ref}
      className="py-section-md md:py-section-lg bg-primary-bg"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-lg md:text-xl leading-relaxed text-text-secondary">
            AESTAGE is more than a salon. It is a space dedicated to the art of transformation. 
            We believe that true style is an extension of the self—a harmonious blend of 
            confidence, artistry, and personal expression. Our craft is in sculpting hair 
            that is not only beautiful but intrinsically <em>you</em>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;