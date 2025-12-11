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
      background: 'linear-gradient(135deg, #C88241 0%, #F0C84A 40%, #C88241 100%)'
    }}>
      {/* Efecto de nieve cayendo - sutil */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{ opacity: snowOpacity * 0.5 }}>
  {[...Array(30)].map((_, i) => (
    <div
      key={i}
      className="absolute text-xl animate-snowfall"
      style={{
        color: '#C8281F',
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
            <div className="relative max-w-4xl mx-auto lg:ml-auto">
              {/* Acento decorativo de fondo */}
              <div className="absolute -top-6 -right-10 w-72 h-72 bg-linear-to-br from-red-100 to-green-50 rounded-full opacity-20 blur-3xl"></div>
              
              <img
                src="/image/huellitaslogo.png"
                alt="Spa para mascotas"
                className="relative w-full h-auto"
                style={{ 
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.1))'
                }} 
              />

              {/* Badge de oferta minimalista - Sobrepuesto en esquina inferior izquierda */}
              <div className="absolute bottom-8 left-8 px-8 py-6 rounded-3xl shadow-2xl backdrop-blur-sm transform rotate-12" style={{ background: 'linear-gradient(135deg, #C8281F 0%, #502C1C 100%)', color: '#F8F8F8', border: '3px solid #F0C84A' }}>
                <p className="text-xs font-semibold opacity-90 text-center">Oferta Especial</p>
                <p className="text-3xl font-bold text-center">10% OFF</p>
              </div>
            </div>
          </div>

          {/* Contenedor del Formulario - Segundo en móvil, primero en desktop */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#C8281F', color: '#F8F8F8' }}>
                <span>🎄</span>
                <span>Temporada Navideña</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ color: '#C8281F' }}>
                Spa Huellitas Felices<br />
                <span style={{ color: '#1C642B' }}>Arequipa</span>
              </h1>
              
              <p className="text-lg mb-6" style={{ color: '#502C1C' }}>
                Cuidado profesional para tu mascota con descuentos especiales esta navidad
              </p>
            </div>

            <div className="p-8 rounded-3xl shadow-xl" style={{ backgroundColor: '#F8F8F8', border: '2px solid #1C642B' }}>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Gracias por contactar a Huellitas Felices Aqp 🥳
                Somos un spa canino móvil que llega a la comodidad de tu hogar.
                Para brindarte un mejor servicio, rellena el formulario por favor, gracias. 🙌 </h3>
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
        <label htmlFor="nombre" className="block text-sm font-medium mb-2" style={{ color: '#502C1C' }}>
          Nombre completo
        </label>
        <input
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          type="text"
          placeholder="Tu nombre"
          className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all"
          style={{ borderColor: '#1C642B', backgroundColor: '#F8F8F8', color: '#502C1C' }}
          required
        />
      </div>

      <div>
        <label htmlFor="mascota" className="block text-sm font-medium mb-2" style={{ color: '#502C1C' }}>
          Nombre de tu mascota
        </label>
        <input
          id="mascota"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
          type="text"
          placeholder="Nombre de tu mascota"
          className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all"
          style={{ borderColor: '#1C642B', backgroundColor: '#F8F8F8', color: '#502C1C' }}
          required
        />
      </div>

      <div>
        <label htmlFor="consulta" className="block text-sm font-medium mb-2" style={{ color: '#502C1C' }}>
          Dirección y distrito, edad de tu engreído, y servicio requerido
        </label>
        <textarea
          id="consulta"
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
          placeholder="Describe el servicio que necesitas..."
          rows={4}
          className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all resize-none"
          style={{ borderColor: '#1C642B', backgroundColor: '#F8F8F8', color: '#502C1C' }}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
        style={{ background: 'linear-gradient(135deg, #1C642B 0%, #C8281F 100%)', color: '#F8F8F8' }}
      >
        <span>Enviar consulta por WhatsApp</span>
        <span>→</span>
      </button>
    </form>
  );
}