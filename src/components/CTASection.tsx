import React from 'react';

export default function CTASection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[url('https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=1920')] bg-cover bg-center rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-black via-black/80 to-transparent p-12 md:p-20">
            <h2 className="text-6xl font-black text-white mb-6">
              READY TO<br />
              <span className="text-red-600">DOMINATE?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              First month at 50% off + Free personal training session!
              <br />Transform your body. Elevate your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg font-bold tracking-wider">
                CLAIM OFFER NOW
              </button>
              <button className="btn-secondary text-lg font-bold tracking-wider">
                VIEW PLANS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}