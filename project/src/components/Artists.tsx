import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { artists } from '../utils/constants';
import { X } from 'lucide-react';
import { Artist } from '../types';

const Artists: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  return (
    <section 
      id="artists" 
      ref={ref}
      className="py-section-md md:py-section-lg bg-primary-bg"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-16 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="mb-4">
            The Visionaries
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Meet the artists who bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div
              key={artist.id}
              className={`text-center cursor-pointer group transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              onClick={() => setSelectedArtist(artist)}
            >
              <div className="relative overflow-hidden rounded-full w-48 h-48 mx-auto mb-6">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-medium text-text-primary mb-2">
                {artist.name}
              </h3>
              <p className="text-text-secondary text-sm">
                {artist.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Artist Modal */}
      {selectedArtist && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50">
          <div className="bg-surface rounded-lg max-w-md w-full p-8 relative">
            <button
              onClick={() => setSelectedArtist(null)}
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src={selectedArtist.image}
                  alt={selectedArtist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-light text-text-primary mb-1">
                {selectedArtist.name}
              </h3>
              <p className="text-accent-warm font-medium">
                {selectedArtist.title}
              </p>
            </div>
            
            <p className="text-text-secondary mb-6 leading-relaxed">
              {selectedArtist.bio}
            </p>
            
            <div>
              <h4 className="font-medium text-text-primary mb-2">Specialties:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedArtist.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-3 py-1 bg-accent-warm/10 text-accent-warm rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Artists;