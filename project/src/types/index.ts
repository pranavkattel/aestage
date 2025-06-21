export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: string;
}

export interface Artist {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  specialties: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  sizes: string[];
  category: string;
}

export interface BookingForm {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  stylist: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}