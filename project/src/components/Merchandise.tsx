import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { products } from '../utils/constants';
import { Product } from '../types';
import ProductModal from './ProductModal';
import { ShoppingBag, Star, Truck, RotateCcw } from 'lucide-react';

const Merchandise: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<number>(0);

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  return (
    <section 
      id="merchandise" 
      ref={ref}
      className="py-section-md md:py-section-lg bg-primary-bg-alt"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`mb-16 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-text-primary">
              AESTAGE Shop
            </h2>
            {cartItems > 0 && (
              <div className="relative">
                <ShoppingBag className="w-8 h-8 text-accent-warm" />
                <span className="absolute -top-2 -right-2 bg-accent-warm text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              </div>
            )}
          </div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
            Extend your style beyond the salon. Our curated collection features minimalist apparel 
            designed for effortless sophistication. Each piece embodies timeless quality with a modern aesthetic.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm text-text-muted">
              <Truck className="w-4 h-4 text-accent-warm" />
              <span>Free shipping over $150</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-text-muted">
              <RotateCcw className="w-4 h-4 text-accent-warm" />
              <span>30-day returns</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-text-muted">
              <Star className="w-4 h-4 text-accent-warm" />
              <span>Premium quality</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group cursor-pointer transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4] bg-surface shadow-sm">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                
                {/* Quick Add Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart();
                  }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent-warm/20 hover:text-accent-warm shadow-lg"
                >
                  Quick Add
                </button>
              </div>
              
              <div className="text-center">
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-lg font-medium text-text-primary">{product.name}</p>
                  <p className="text-lg font-medium text-accent-warm">Rs {product.price}</p>
                </div>
                <p className="text-xs text-text-muted mt-1">
                  {product.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="bg-surface rounded-lg p-8 shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-text-primary mb-4">
              Style Consultation Available
            </h3>
            <p className="text-text-secondary mb-6">
              Not sure what pieces would work best for you? Book a personal styling session 
              with one of our experts to curate the perfect wardrobe.
            </p>
            <button
              onClick={() => {
                localStorage.setItem('selectedService', 'consultation');
                window.location.href = '/booking';
              }}
              className="bg-accent-warm text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-copper transition-colors"
            >
              Book Style Consultation
            </button>
          </div>
        </div>
      </div>

      <ProductModal
        product={selectedProduct!}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default Merchandise;