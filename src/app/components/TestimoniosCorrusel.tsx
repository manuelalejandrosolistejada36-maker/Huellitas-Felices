"use client";

import React, { useState } from 'react';

// --- DATOS DEL EQUIPO ---
const testimonialsData = [
  {
    quote: "¡ME ENCANTOOO! La atención al detalle y el compromiso con la calidad son evidentes en cada aspecto de su trabajo. Altamente recomendados.",
    name: "Javier Morales",
  },
  {
    quote: "Quedé fascinada con el nivel de profesionalismo, puntualidad y trataron con mucho amor a mi Luna, 100% recomendable.",
    name: "Sofía Martínez",

  },
  {
    quote: "Lindos detalles por fiestas navideñas, mi peludita llegó súper feliz y oliendo delicioso. ¡Gracias por cuidar tan bien de ella! Recomendadísimo.",
    name: "Ricardo Pérez",
  },
];

/**
 * Componente funcional de carrusel de testimonios con diseño minimalista.
 * Incluye la lógica básica de navegación (estado y funciones).
 */
const TestimoniosCarrusel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonialsData[currentIndex];
  const totalTestimonials = testimonialsData.length;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalTestimonials - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonios" className="py-16 md:py-24 transition duration-500 relative" style={{
      background: 'linear-gradient(180deg, #FFF5F5 0%, #FEE2E2 100%)',
      backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(22, 163, 74, 0.08) 0%, transparent 50%)'
    }}>
      {/* Borde superior decorativo */}
      <div className="absolute top-0 left-0 w-full h-3 bg-linear-to-r from-green-600 via-red-600 to-green-600"></div>
      
      {/* Copos de nieve decorativos más abundantes */}
      <div className="hidden md:block absolute top-10 left-[5%] text-5xl opacity-30 animate-spin-slow">❄️</div>
      <div className="hidden md:block absolute top-10 right-[5%] text-5xl opacity-30 animate-spin-slow" style={{ animationDelay: '2s' }}>❄️</div>
      <div className="hidden sm:block absolute top-32 left-[15%] text-4xl opacity-30 animate-bounce">⭐</div>
      <div className="hidden sm:block absolute top-32 right-[15%] text-4xl opacity-30 animate-bounce" style={{ animationDelay: '1s' }}>⭐</div>
      <div className="hidden md:block absolute bottom-20 left-[10%] text-5xl opacity-30 animate-pulse">🎄</div>
      <div className="hidden md:block absolute bottom-20 right-[10%] text-5xl opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}>🎄</div>
      <div className="hidden sm:block absolute bottom-40 left-1/3 text-4xl opacity-30">🎁</div>
      <div className="hidden sm:block absolute bottom-40 right-1/3 text-4xl opacity-30">🎁</div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Título Navideño */}
        <div className="relative inline-block mb-20">
          <div className="absolute -top-8 -left-8 text-5xl animate-bounce"></div>
          <div className="absolute -top-8 -right-8 text-5xl animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-2" style={{
            background: 'linear-gradient(135deg, #dc2626 0%, #16a34a 50%, #dc2626 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ✨ Testimonios Navideños ✨
          </h2>
          <p className="text-base md:text-lg text-red-700 font-semibold mt-2">🎁 Lo que dicen nuestros clientes esta Navidad 🎁</p>
        </div>

        {/* CONTENEDOR DE LA CITA ACTIVA Y NAVEGACIÓN */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          
          {/* Bloque de Testimonio - Aquí aplicarías las clases de animación (e.g., opacity-0 a opacity-100) */}
          {/* La clase 'transition duration-700' es un placeholder de Tailwind para la animación */}
          <div key={currentIndex} className="transition duration-700 ease-in-out opacity-100"> 
            
            {/* Cita - La tipografía grande y elegante */}
            <blockquote className="text-3xl italic font-serif text-[#333333] leading-snug mx-auto max-w-3xl">
              "{currentTestimonial.quote}"
            </blockquote>
            
            {/* Atribución */}
            <div className="mt-10">
              <p className="text-xl font-semibold text-[#333333]">
                {currentTestimonial.name}
              </p>
            </div>
          </div>

          {/* Flecha Izquierda */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 p-3 rounded-full transition focus:outline-none"
            aria-label="Testimonio anterior"
          >
            <span className="text-3xl font-light">←</span>
          </button>
          
          {/* Flecha Derecha */}
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 p-3 rounded-full transition focus:outline-none"
            aria-label="Testimonio siguiente"
          >
            <span className="text-3xl font-light">→</span>
          </button>

        </div>
        
        {/* Puntos de Paginación */}
        <div className="mt-10 flex justify-center space-x-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`block w-2.5 h-2.5 rounded-full cursor-pointer transition ${
                index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-700'
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimoniosCarrusel;