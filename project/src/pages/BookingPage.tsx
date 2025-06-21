import React from 'react';
import Navigation from '../components/Navigation';
import Booking from '../components/Booking';
import Footer from '../components/Footer';

const BookingPage: React.FC = () => (
  <div className="min-h-screen bg-primary-bg-alt">
    <Navigation />
    <Booking />
    <Footer />
  </div>
);

export default BookingPage;
