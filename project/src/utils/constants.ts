import { Service, Artist, Product } from '../types';

// Import local images from the assets folder using web-safe names
import serviceCut from '../assets/cur.jpg';
import serviceColor from '../assets/hair design.jpg';
import serviceStyling from '../assets/design.jpg';
import artist1 from '../assets/cur.jpg';
import artist2 from '../assets/cur.jpg';
import artist3 from '../assets/cur.jpg';
import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';


export const services: Service[] = [
  {
    id: 'precision-cutting',
    title: 'Precision Cutting',
    description: 'Tailored shapes that complement your individuality.',
    image: serviceCut,
    price: 'From Rs 500'
  },
  {
    id: 'dimensional-color',
    title: 'Dimensional Color',
    description: 'From sun-kissed highlights to avant-garde hues, we paint with light and shadow.',
    image: serviceColor,
    price: 'From Rs 900'
  },
  {
    id: 'signature-styling',
    title: 'Signature Styling & Treatments',
    description: 'The final touch. Effortless elegance and nourishing care for hair that radiates health.',
    image: serviceStyling,
    price: 'From Rs 1300'
  }
];

export const artists: Artist[] = [
  {
    id: 'elena-morrison',
    name: 'Elena Morrison',
    title: 'Master Stylist & Creative Director',
    image: artist1, // <-- Use the imported image variable
    bio: 'With over 15 years of experience in high-fashion styling, Elena brings an editorial eye to every cut and color. Her philosophy centers on enhancing natural beauty while pushing creative boundaries.',
    specialties: ['Editorial Cuts', 'Color Artistry', 'Bridal Styling']
  },
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    title: 'Color Director',
    image: artist2, // <-- Use the imported image variable
    bio: 'Marcus is renowned for his innovative color techniques and ability to create dimensional, lived-in looks. He believes color should move and evolve with you.',
    specialties: ['Balayage', 'Color Correction', 'Creative Color']
  },
  {
    id: 'sofia-laurent',
    name: 'Sofia Laurent',
    title: 'Senior Stylist',
    image: artist3, // <-- Use the imported image variable
    bio: 'Sofia specializes in modern, wearable cuts that translate seamlessly from day to night. Her approach is intuitive, focusing on texture and movement.',
    specialties: ['Precision Cutting', 'Texture Work', 'Men\'s Grooming']
  }
];

export const products: Product[] = [
  {
    id: 'essential-tee',
    name: 'The Essential Tee',
    price: 800,
    images: [
      product1
    ],
    description: 'Crafted from organic cotton with a relaxed fit. The perfect foundation piece.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Tops'
  },
  {
    id: 'flow-maxi-dress',
    name: 'The Flow Maxi Dress',
    price: 1800,
    images: [
      product3
    ],
    description: 'Effortless elegance in sustainable fabric. Features adjustable straps and a flowing silhouette.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Dresses'
  },
  {
    id: 'minimalist-blazer',
    name: 'The Minimalist Blazer',
    price: 2500,
    images: [
      product2
    ],
    description: 'Tailored perfection in a timeless silhouette. Versatile enough for any occasion.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Outerwear'
  },
  {
    id: 'signature-scarf',
    name: 'The Signature Scarf',
    price: 1200,
    images: [
      product4
    ],
    description: 'Luxurious silk blend with our exclusive pattern. The perfect finishing touch.',
    sizes: ['One Size'],
    category: 'Accessories'
  }
];

export const availableTimes = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM'
];

export const galleryImages = [
  product2,
  serviceCut,
   three,
   product1,
  serviceStyling,
  one,
  product3,
  serviceColor,
  two,
  product4
];