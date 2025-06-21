import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import BookingPage from './pages/BookingPage';

import './index.css';

// Add loading indicator
const showLoadingIndicator = () => {
  const loader = document.createElement('div');
  loader.id = 'page-loader';
  loader.innerHTML = `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      transition: opacity 0.3s ease;
    ">
      <div style="
        width: 40px;
        height: 40px;
        border: 3px solid #10b981;
        border-top: 3px solid transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      "></div>
    </div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;
  document.body.appendChild(loader);
};

const hideLoadingIndicator = () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 300);
  }
};

// Simple routing based on URL path
const pathname = window.location.pathname;
const isBookingPage = pathname === '/booking' || pathname === '/booking/';

// Handle hash navigation when coming from booking page
if (!isBookingPage && window.location.hash) {
  setTimeout(() => {
    const hash = window.location.hash.substring(1);
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
}

// Show loader immediately
if (document.readyState === 'loading') {
  showLoadingIndicator();
}

// Preload critical images
const preloadImages = () => {
  const criticalImages = [
    'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg',
    'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
    'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Preload images immediately
preloadImages();

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    {isBookingPage ? <BookingPage /> : <App />}
  </StrictMode>
);

// Hide loader after render
setTimeout(() => {
  hideLoadingIndicator();
  
  // Additional fix for navigation positioning
  const nav = document.querySelector('nav');
  if (nav) {
    nav.style.position = 'fixed';
    nav.style.top = '0px';
    nav.style.left = '0px';
    nav.style.right = '0px';
    nav.style.zIndex = '999999';
    nav.style.width = '100%';
  }
}, 100);
