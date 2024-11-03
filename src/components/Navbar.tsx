import React from 'react';
import { Dumbbell } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-2xl font-black text-white tracking-wider">ABS FITNESS</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-red-600 px-3 py-2 text-sm font-semibold tracking-wider">HOME</a>
              <a href="#" className="text-gray-300 hover:text-red-600 px-3 py-2 text-sm font-semibold tracking-wider">CLASSES</a>
              <a href="#" className="text-gray-300 hover:text-red-600 px-3 py-2 text-sm font-semibold tracking-wider">TRAINERS</a>
              <a href="#" className="text-gray-300 hover:text-red-600 px-3 py-2 text-sm font-semibold tracking-wider">MEMBERSHIP</a>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition text-sm font-semibold tracking-wider">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}