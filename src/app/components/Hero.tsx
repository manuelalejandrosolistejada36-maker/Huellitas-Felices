"use client";

import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcular opacidad basada en el scroll (se desvanece después de 300px)
  const snowOpacity = Math.max(0, 1 - scrollY / 300);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ 
      background: 'linear-gradient(135deg, #FFF9F0 0%, #FFF5E6 50%, #FFEFD5 100%)'
    }}>
      {/* Efecto de nieve cayendo - sutil */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{ opacity: snowOpacity * 0.5 }}>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-red-400 text-xl animate-snowfall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
              opacity: 0.4 + Math.random() * 0.3
            }}
          >
            ❄️
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Contenedor de la Imagen - Primero en móvil, segundo en desktop */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-lg mx-auto lg:ml-auto">
              {/* Acento decorativo de fondo */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-linear-to-br from-red-100 to-green-50 rounded-full opacity-20 blur-3xl"></div>
              
              <img
                src="/image/hf.png"
                alt="Spa para mascotas"
                className="relative w-full h-auto"
                style={{ 
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.1))'
                }} 
              />

              {/* Badge de oferta minimalista */}
              <div className="absolute -bottom-4 -left-4 bg-linear-to-br from-red-600 to-red-700 text-white px-6 py-4 rounded-2xl shadow-xl backdrop-blur-sm">
                <p className="text-sm font-semibold opacity-90">Oferta Especial</p>
                <p className="text-3xl font-bold">25% OFF</p>
              </div>
            </div>
          </div>

          {/* Contenedor del Formulario - Segundo en móvil, primero en desktop */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span>🎄</span>
                <span>Temporada Navideña</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Spa Huellitas<br />
                <span className="text-green-700">Felices</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                Cuidado profesional para tu mascota con descuentos especiales esta navidad
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Reserva tu cita</h3>
              <FormBlock />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;

function FormBlock() {
  const [nombre, setNombre] = useState('');
  const [mascota, setMascota] = useState('');
  const [consulta, setConsulta] = useState('');

  const WHATSAPP_URL = 'https://wa.me/51953293677';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensaje = [
      `Nombre: ${nombre || '-'}`,
      `Nombre de la mascota: ${mascota || '-'}`,
      `Consulta: ${consulta || '-'}`,
    ].join('\n');

    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
          Nombre completo
        </label>
        <input
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          type="text"
          placeholder="Tu nombre"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all"
          required
        />
      </div>

      <div>
        <label htmlFor="mascota" className="block text-sm font-medium text-gray-700 mb-2">
          Nombre de tu mascota
        </label>
        <input
          id="mascota"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
          type="text"
          placeholder="Nombre de tu mascota"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all"
          required
        />
      </div>

      <div>
        <label htmlFor="consulta" className="block text-sm font-medium text-gray-700 mb-2">
          Cuéntanos qué necesitas
        </label>
        <textarea
          id="consulta"
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
          placeholder="Describe el servicio que necesitas..."
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all resize-none"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 rounded-xl shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <span>Enviar consulta por WhatsApp</span>
        <span>→</span>
      </button>
    </form>
  );
}