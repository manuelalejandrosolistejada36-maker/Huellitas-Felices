import React from 'react';
import Navbar from '../app/components/Navbar';
import Hero from '../app/components/Hero';
import Footer from '../app/components/Footer';
import Services from '../app/components/Services';
import SobreNosotros from '../app/components/Sobrenosotros';
import TestimoniosCarrusel from '../app/components/TestimoniosCorrusel';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#FFF5F5', backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(22, 163, 74, 0.05) 0%, transparent 50%)' }}>
      {/* Nieve cayendo - copo 1 */}
      <div className="absolute top-0 left-[10%] text-2xl animate-[fall_10s_linear_infinite] opacity-70">❄️</div>
      <div className="absolute top-0 left-[30%] text-3xl animate-[fall_12s_linear_infinite_2s] opacity-60">❄️</div>
      <div className="absolute top-0 left-[50%] text-2xl animate-[fall_15s_linear_infinite_4s] opacity-80">❄️</div>
      <div className="absolute top-0 left-[70%] text-3xl animate-[fall_11s_linear_infinite_1s] opacity-70">❄️</div>
      <div className="absolute top-0 left-[90%] text-2xl animate-[fall_13s_linear_infinite_3s] opacity-60">❄️</div>
      
      {/* Decoraciones navideñas fijas */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-pulse">🎄</div>
      <div className="absolute top-40 right-20 text-5xl opacity-20 rotate-12">🎅</div>
      <div className="absolute bottom-40 left-20 text-5xl opacity-20">🎁</div>
      <div className="absolute bottom-60 right-10 text-4xl opacity-20 animate-bounce">⭐</div>
      
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SobreNosotros />
        <TestimoniosCarrusel />
      </main>
      <Footer />
    </div>
  );
}

