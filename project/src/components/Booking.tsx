import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { services, artists, availableTimes } from '../utils/constants';
import { BookingForm } from '../types';
import { Calendar, Clock, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const Booking: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingForm>({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    stylist: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.service || !formData.preferredDate || !formData.preferredTime) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // In a real app, this would send data to a backend
    console.log('Booking request:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-section-md md:py-section-lg bg-primary-bg-alt text-text-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <div className="w-20 h-20 bg-accent-warm rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="mb-6">Appointment Requested</h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Thank you for choosing AESTAGE. We have received your appointment request and will contact you 
              within 24 hours to confirm your booking and discuss any specific requirements.
            </p>
            <div className="bg-primary-bg rounded-lg p-6 max-w-md mx-auto mb-8">
              <h3 className="font-medium mb-4 text-text-primary">Your Request Details:</h3>
              <div className="text-left space-y-2 text-sm text-text-secondary">
                <p><span className="text-text-primary">Service:</span> {services.find(s => s.id === formData.service)?.title || formData.service}</p>
                <p><span className="text-text-primary">Date:</span> {formData.preferredDate}</p>
                <p><span className="text-text-primary">Time:</span> {formData.preferredTime}</p>
                {formData.stylist && (
                  <p><span className="text-text-primary">Stylist:</span> {artists.find(a => a.id === formData.stylist)?.name || 'No preference'}</p>
                )}
              </div>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  service: '',
                  stylist: '',
                  preferredDate: '',
                  preferredTime: '',
                  notes: ''
                });
              }}
              className="text-accent-warm hover:text-accent-copper transition-colors font-medium"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="booking" 
      ref={ref}
      className="py-section-md md:py-section-lg bg-primary-bg-alt text-text-primary"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`mb-16 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="mb-6">
            Begin Your Transformation
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Book your appointment with one of our expert stylists and experience the AESTAGE difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="bg-primary-bg rounded-lg p-8">
              <h3 className="text-2xl font-light mb-8 text-center">Schedule Your Visit</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-text-secondary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-surface rounded-lg focus:ring-2 focus:ring-accent-warm focus:border-transparent text-text-primary placeholder-text-muted"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-surface rounded-lg focus:ring-2 focus:ring-accent-warm focus:border-transparent text-text-primary placeholder-text-muted"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-surface rounded-lg focus:ring-2 focus:ring-accent-warm focus:border-transparent text-text-primary placeholder-text-muted"
                    placeholder="+977 98X XXX XXXX"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-2">
                      Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-surface rounded-lg focus:ring-2 focus:ring-accent-warm focus:border-transparent text-text-primary"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                      <option value="consultation">Style Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="stylist" className="block text-sm font-medium text-text-secondary mb-2">
                      Preferred Stylist
                    </label>
                    <select
                      id="stylist"
                      name="stylist"
                      value={formData.stylist}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-surface border border-surface rounded-lg focus:ring-2 focus:ring-accent-warm focus:border-transparent text-text-primary"
                    >
                      <option value="">No preference</option>
                      {artists.map((artist) => (
                        <option key={artist.id} value={artist.id}>
                          {artist.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-text-secondary mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      className="w-full px-4 py-3 bg-surface border border-surface rounded-lg focus:ring-2 focus:ring-accent-warm focus:border-transparent text-text-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-text-secondary mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-surface rounded-lg focus:ring-2 focus:ring-accent-warm focus:border-transparent text-text-primary"
                    >
                      <option value="">Select a time</option>
                      {availableTimes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-text-secondary mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Any specific requests, hair concerns, or questions..."
                    className="w-full px-4 py-3 bg-surface border border-surface rounded-lg focus:ring-2 focus:ring-accent-warm focus:border-transparent text-text-primary placeholder-text-muted"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-warm text-white py-4 rounded-lg font-medium hover:bg-accent-copper transition-colors text-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Request Appointment
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="bg-primary-bg rounded-lg p-8">
              <h3 className="text-2xl font-light mb-8">Visit Our Salon</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent-warm mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-text-primary">Location</p>
                    <p className="text-text-secondary">
                      123 Durbar Marg<br />
                      Kathmandu, Nepal 44600
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-accent-warm mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-text-primary">Phone</p>
                    <p className="text-text-secondary">+977 1 234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-accent-warm mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-text-primary">Email</p>
                    <p className="text-text-secondary">hello@aestage-salon.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-accent-warm mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-text-primary">Hours</p>
                    <div className="text-text-secondary text-sm space-y-1">
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 h-48 bg-surface rounded-lg flex items-center justify-center">
                <div className="text-center text-text-muted">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">Interactive Map</p>
                  <p className="text-xs">Durbar Marg, Kathmandu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;