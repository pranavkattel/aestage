import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Gem, Scissors, Wind } from 'lucide-react';
import collectionImage from '../assets/backk.jpg'; // Import the converted image

const Collection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    {
      icon: <Gem className="w-8 h-8" />,
      title: 'Bespoke Consultation',
      description: 'Every service begins with a personalized consultation to understand your unique style and needs.'
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'Master Artistry',
      description: 'Our stylists are masters of their craft, dedicated to creating exceptional results with precision and care.'
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Relaxing Ambiance',
      description: 'Our salon is a sanctuary designed for your comfort, allowing you to unwind and rejuvenate.'
    }
  ];

  return (
    <section 
      id="collection" 
      ref={ref}
      className="py-section-md md:py-section-lg bg-primary-bg-alt"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-16 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="mb-6">
            The AESTAGE Difference
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We don't just style hair—we craft experiences. Each visit to AESTAGE is a journey 
            of transformation, where artistry meets individuality to create something uniquely you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className={`text-center transition-all duration-1000 delay-${index * 150} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-warm/10 text-accent-warm rounded-full mb-6">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-light text-text-primary mb-4">
                {highlight.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Image */}
        <div className={`transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="relative overflow-hidden rounded-lg aspect-[21/9] max-w-5xl mx-auto">
            <img
              src={collectionImage}
              alt="AESTAGE salon experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-light mb-2">Where Art Meets Beauty</h3>
              <p className="text-white/90">Experience the AESTAGE transformation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;