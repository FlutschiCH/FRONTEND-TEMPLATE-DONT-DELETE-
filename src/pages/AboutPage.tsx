import React from 'react';

export const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] p-6">
      <div className="bg-sky-950/20 border border-sky-400/10 backdrop-blur-xl p-10 rounded-[2.5rem] max-w-4xl mx-auto text-center space-y-6 tracking-tight font-medium">
        <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
        <p className="text-lg text-white/80 leading-relaxed">We are a modern clothing brand dedicated to minimalist design and sustainable practices. Our mission is to provide high-quality, timeless apparel that empowers you to express your unique style with simplicity and elegance.</p>
        <p className="text-lg text-white/80 leading-relaxed">Founded in 2023, Deep Ocean fashion strives for ethical production and a positive impact on both our customers and the planet. Join us on our journey towards a more conscious and stylish future.</p>
      </div>
    </div>
  );
};
