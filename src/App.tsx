import React from 'react';
import { Dumbbell, MapPin, Users, Clock, Trophy, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Transformations from './components/Transformations';
import Features from './components/Features';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import SocialButtons from './components/SocialButtons';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Transformations />
      <Features />
      <CTASection />
      <Footer />
      <SocialButtons />
    </div>
  );
}

export default App;