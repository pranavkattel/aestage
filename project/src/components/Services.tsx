import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { services } from '../utils/constants';

const Services: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const navigateToBooking = (serviceId: string) => {
    localStorage.setItem('selectedService', serviceId);
    window.location.href = '/booking';
  };

  return (
    <section 
      id="services" 
      ref={ref}
      className="py-section-md md:py-section-lg bg-primary-bg-alt"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-16 text-center transform transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="mb-4">
            The Salon
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our signature services, crafted with precision and artistry
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group cursor-pointer transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              onClick={() => navigateToBooking(service.id)}
            >
              <div className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                  <div className="relative overflow-hidden rounded-md aspect-[4/5]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-light text-text-primary mb-4 group-hover:text-accent-warm transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  {service.price && (
                    <p className="text-sm font-medium text-accent-warm">
                      {service.price}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;