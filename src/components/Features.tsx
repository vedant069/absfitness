import React from 'react';
import { Users, Clock, Trophy, Sparkles, Dumbbell } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Users className="h-12 w-12 text-red-600" />,
      title: "ELITE TRAINERS",
      description: "World-class certified professionals",
      image: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?auto=format&fit=crop&w=1000"
    },
    {
      icon: <Clock className="h-12 w-12 text-red-600" />,
      title: "24/7 ACCESS",
      description: "Train anytime, day or night",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000"
    },
    {
      icon: <Dumbbell className="h-12 w-12 text-red-600" />,
      title: "PREMIUM GEAR",
      description: "Latest fitness technology",
      image: "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?auto=format&fit=crop&w=1000"
    },
    {
      icon: <Sparkles className="h-12 w-12 text-red-600" />,
      title: "LUXURY SPACE",
      description: "State-of-the-art facilities",
      image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1000"
    }
  ];

  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-7xl font-black text-white mb-4">ELITE FACILITIES</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-20 bg-red-600"></div>
            <p className="text-gray-400 text-xl">BEYOND ORDINARY</p>
            <div className="h-1 w-20 bg-red-600"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-black rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500 border border-zinc-800 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-[300px]">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              </div>
              <div className="p-8">
                <div className="mb-4 transform hover:scale-110 transition-transform inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-black rounded-lg p-8 border border-zinc-800 fade-in">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">SIGNATURE CLASSES</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {['BEAST MODE HIIT', 'POWER YOGA', 'COMBAT FIT', 'STRENGTH ELITE', 'CROSSFIT PRO', 'CARDIO BLAST'].map((className, index) => (
              <div 
                key={className} 
                className="bg-zinc-900 p-6 rounded-md text-white font-semibold hover:bg-red-600 hover:scale-105 transform transition duration-300 text-center border border-zinc-800"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {className}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}