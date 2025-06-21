import React from 'react';
import { Instagram, Pointer as Pinterest } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-bg-alt text-text-primary py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-text-muted text-sm">Where Style Breathes</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="Follow us on Pinterest"
            >
              <Pinterest className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-surface mt-8 pt-8 text-center">
          <p className="text-text-muted text-sm">
            © 2025 AESTAGE Artistry & Apparel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;