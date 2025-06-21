import React from 'react';
import { ChevronDown } from 'lucide-react';
import heroVideo from '../assets/background_video.mp4'; // Import the video

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const element = document.getElementById('philosophy');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          src={heroVideo} // <-- Use the imported video variable here
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-left text-white max-w-7xl w-full mx-auto px-6">
        <h1 className="max-w-2xl">
          Where Style Breathes
        </h1>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-muted hover:text-text-primary transition-colors duration-300"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;