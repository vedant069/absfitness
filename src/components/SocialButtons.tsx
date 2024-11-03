import React from 'react';
import { MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';

export default function SocialButtons() {
  const socialLinks = {
    whatsapp: "https://wa.me/919209401414",
    instagram: "https://instagram.com/absfitness",
    facebook: "https://facebook.com/absfitness",
    twitter: "https://twitter.com/absfitness"
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 p-4 rounded-full text-white hover:scale-110 transition-transform duration-300 shadow-lg z-50 group animate-bounce"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat with us!
        </span>
      </a>

      {/* Footer Social Links */}
      <div className="fixed bottom-8 left-8 flex gap-4 z-50">
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900/50 backdrop-blur-sm p-2 rounded-full text-white/50 hover:text-white transition-colors duration-300"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900/50 backdrop-blur-sm p-2 rounded-full text-white/50 hover:text-white transition-colors duration-300"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900/50 backdrop-blur-sm p-2 rounded-full text-white/50 hover:text-white transition-colors duration-300"
        >
          <Twitter className="h-5 w-5" />
        </a>
      </div>
    </>
  );
}