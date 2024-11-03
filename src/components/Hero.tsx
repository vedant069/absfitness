import React from 'react';
import { MapPin, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1920"
          className="w-full h-full object-cover"
          alt="Gym Interior"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>
      
      <div className="relative h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-[120px] font-black leading-none mb-6">
            <span className="text-stroke">UNLEASH</span>
            <br />
            <span className="text-red-600">YOUR BEAST</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8 font-light tracking-wide">
            WHERE LEGENDS ARE FORGED
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg">
              START YOUR JOURNEY
            </button>
            <button className="btn-secondary text-lg">
              EXPLORE MEMBERSHIP
            </button>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-red-600" />
              <span className="ml-2">Onyx Business, 52 Kondhwa, Tilekar Nagar, Pune 411048</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-red-600" />
              <span className="ml-2">9209401414</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}