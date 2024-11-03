import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Transformations() {
  const transformations = [
    {
      name: "Rahul Sharma",
      duration: "6 months",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800",
      stats: "-30kg / +15kg muscle"
    },
    {
      name: "Priya Patel",
      duration: "8 months",
      image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?auto=format&fit=crop&w=800",
      stats: "-25kg / Lifestyle Change"
    },
    {
      name: "Amit Kumar",
      duration: "4 months",
      image: "https://images.unsplash.com/photo-1609899537878-9c2a4195048d?auto=format&fit=crop&w=800",
      stats: "+10kg Muscle Mass"
    },
    {
      name: "Neha Singh",
      duration: "5 months",
      image: "https://images.unsplash.com/photo-1583454155184-870a1f63be44?auto=format&fit=crop&w=800",
      stats: "Complete Body Transform"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black text-white mb-4">
            TRANSFORMATIONS
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-20 bg-red-600"></div>
            <p className="text-gray-400 text-xl">REAL RESULTS • REAL PEOPLE</p>
            <div className="h-1 w-20 bg-red-600"></div>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex gap-8 slide">
            {[...transformations, ...transformations].map((item, index) => (
              <div key={index} className="min-w-[300px] bg-zinc-900 rounded-lg overflow-hidden group">
                <div className="relative">
                  <img src={item.image} alt={item.name} className="w-full h-[400px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xl font-bold text-white">{item.stats}</p>
                      <div className="flex items-center text-red-600 mt-2">
                        <span>View Journey</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-red-600">{item.duration} transformation</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}