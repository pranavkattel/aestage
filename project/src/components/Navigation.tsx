import React, { useState, useEffect, useCallback } from 'react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const isBookingPage = window.location.pathname === '/booking' || window.location.pathname === '/booking/';

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    if (isBookingPage) {
      // Add instant visual feedback
      setIsNavigating(true);
      
      // Create overlay for smooth transition
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        z-index: 9998;
        opacity: 0;
        transition: opacity 0.2s ease;
      `;
      document.body.appendChild(overlay);
      
      requestAnimationFrame(() => {
        overlay.style.opacity = '1';
        setTimeout(() => {
          window.location.href = `/#${sectionId}`;
        }, 150);
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navigateToBooking = () => {
    setIsNavigating(true);
    
    // Create smooth transition overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #111827;
      z-index: 9998;
      opacity: 0;
      transition: opacity 0.2s ease;
    `;
    document.body.appendChild(overlay);
    
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      setTimeout(() => {
        window.location.href = '/booking';
      }, 150);
    });
  };

  const navigateToHome = () => {
    if (isBookingPage) {
      setIsNavigating(true);
      
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        z-index: 9998;
        opacity: 0;
        transition: opacity 0.2s ease;
      `;
      document.body.appendChild(overlay);
      
      requestAnimationFrame(() => {
        overlay.style.opacity = '1';
        setTimeout(() => {
          window.location.href = '/';
        }, 150);
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ${
        isScrolled || isBookingPage ? 'bg-primary-bg/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={navigateToHome}>
            <img
              src="/src/assets/logo.png"
              alt="AESTAGE Logo"
              className="h-14 w-auto invert"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            {[
              { label: 'The Salon', id: 'services' },
              { label: 'The Collection', id: 'collection' },
              { label: 'Shop', id: 'merchandise' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                disabled={isNavigating}
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent-warm ${
                  isScrolled || isBookingPage ? 'text-text-primary' : 'text-white/90'
                } ${isNavigating ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {item.label}
              </button>
            ))}
            {!isBookingPage && (
              <button
                onClick={navigateToBooking}
                disabled={isNavigating}
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent-warm ${
                  isScrolled ? 'text-text-primary' : 'text-white/90'
                } ${isNavigating ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isNavigating ? 'Loading...' : 'Book Now'}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;