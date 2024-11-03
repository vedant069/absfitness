import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const socialLinks = {
    instagram: "https://instagram.com/absfitness",
    facebook: "https://facebook.com/absfitness",
    twitter: "https://twitter.com/absfitness"
  };

  return (
    <footer className="bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Dumbbell className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-black text-white">ABS FITNESS</span>
            </div>
            <p className="mt-4 text-gray-400">
              Elevate your fitness journey at Pune's most elite training facility.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 tracking-wider">QUICK LINKS</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-red-600">Classes</a></li>
              <li><a href="#" className="hover:text-red-600">Schedule</a></li>
              <li><a href="#" className="hover:text-red-600">Pricing</a></li>
              <li><a href="#" className="hover:text-red-600">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 tracking-wider">HOURS</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 24/7</li>
              <li>Saturday: 24/7</li>
              <li>Sunday: 24/7</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 tracking-wider">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-red-600 transition"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-red-600 transition"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-red-600 transition"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-zinc-900 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ABS FITNESS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}