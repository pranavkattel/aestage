import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Artists from './components/Artists';
import Collection from './components/Collection';
import Experience from './components/Experience';
import Merchandise from './components/Merchandise';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary-bg-alt">
      <Navigation />
      <Hero />
      <Philosophy />
      <Services />
      <Artists />
      <Collection />
      <Experience />
      <Merchandise />
      <Footer />
    </div>
  );
}

export default App;