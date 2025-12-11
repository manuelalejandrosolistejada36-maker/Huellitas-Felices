"use client";

import React, { useState } from 'react';

// Define la interfaz para las props de cada servicio
interface ServiceProps {
  icon: string; // Emoji o carácter para el icono
  title: string;
  description: string;
  fullDescription: string;
  onLearnMore: () => void;
}

// Componente individual de la tarjeta de servicio
const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, onLearnMore }) => (
  <div className="group p-6 md:p-8 rounded-2xl shadow-lg border-2 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden" style={{ 
    backgroundColor: '#F8F8F8',
    borderColor: '#C8281F',
    boxShadow: '0 4px 12px rgba(200, 40, 31, 0.2), 0 0 20px rgba(28, 100, 43, 0.1)'
  }}>
    {/* Decoración navideña de esquina */}
    <div className="absolute top-2 right-2 text-2xl opacity-20 group-hover:opacity-40 transition-opacity">🎄</div>
    
    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" style={{
      background: 'linear-gradient(135deg, #C8281F 0%, #1C642B 50%, #F0C84A 100%)',
      boxShadow: '0 4px 12px rgba(200, 40, 31, 0.3), 0 0 20px rgba(240, 200, 74, 0.2)'
    }}>
      <span className="text-3xl md:text-4xl">{icon}</span>
    </div>
    <h3 className="text-lg md:text-xl font-bold mb-3 text-center transition-colors duration-300" style={{
      color: '#1C642B',
      textShadow: '0 2px 4px rgba(28, 100, 43, 0.1)'
    }}>
      {title}
    </h3>
    <p className="text-center text-sm leading-relaxed mb-6" style={{ color: '#502C1C' }}>
      {description}
    </p>
    <button 
      onClick={onLearnMore}
      className="font-semibold text-sm transition-all duration-300 flex items-center gap-2 group/link cursor-pointer px-4 py-2 rounded-full" style={{
        color: '#F8F8F8',
        background: 'linear-gradient(135deg, #C8281F 0%, #502C1C 100%)',
        boxShadow: '0 4px 8px rgba(200, 40, 31, 0.3)'
      }}
    >
      Saber Más
      <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
    </button>
  </div>
);

// Componente principal de Servicios
const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceProps | null>(null);

  // Datos de los servicios
  const servicesData: ServiceProps[] = [
    {
      icon: '✂️',
      title: 'BAÑO Y PELUQUERÍA A DOMICILIO',
      description: 'Servicio completo de estética canina y felina en la comodidad de tu hogar. Sin estrés, sin esperas.',
      fullDescription: 'Ofrecemos un servicio completo de estética canina y felina, realizado con equipos profesionales directamente en la tranquilidad de tu hogar. El servicio incluye baño, secado, cepillado, corte de pelo especializado para cada raza, limpieza de oídos y corte de uñas. Evita el estrés del traslado y la espera, disfrutando de resultados impecables y un trato 100% personalizado.',
      onLearnMore: () => {}
    },
    {
      icon: '💊',
      title: 'BAÑO MEDICADO (TERAPÉUTICO)',
      description: 'Tratamientos especializados con champús y lociones formuladas por veterinarios para condiciones dermatológicas.',
      fullDescription: 'Aplicamos tratamientos de higiene especializados con champús y lociones formuladas o prescritas por veterinarios. Este servicio es esencial para el apoyo terapéutico de condiciones dermatológicas como alergias, dermatitis o infecciones. Aseguramos la correcta aplicación y tiempo de contacto de los productos para garantizar el máximo alivio y la recuperación efectiva de la piel de tu mascota.',
      onLearnMore: () => {}
    },
    {
      icon: '💎',
      title: 'AGUA TERMAL (CUIDADO PREMIUM)',
      description: 'Baño con agua enriquecida con minerales naturales. Hidratación profunda y acabado de lujo para tu mascota.',
      fullDescription: 'Elevamos la experiencia del baño utilizando agua enriquecida con minerales naturales. El agua termal calma irritaciones, hidrata profundamente la piel y el pelaje, y proporciona un acabado excepcionalmente suave, brillante y manejable. Es nuestro toque de lujo para el bienestar de tu mascota.',
      onLearnMore: () => {}
    },
    {
      icon: '💉',
      title: 'VACUNAS AL DÍA, PELUDITOS MÁS SEGUROS',
      description: 'La mejor protección para tu mascota. Mantén sus vacunas al día y garantiza su salud y bienestar.',
      fullDescription: 'Mantener sus vacunas al día los protege de enfermedades, fortalece su sistema inmune y les permite disfrutar cada momento sin riesgos. En nuestro spa nos preocupamos por su bienestar y te recordamos la importancia de: ✔️ Vacunas completas ✔️ Desparasitación interna y externa ✔️ Control veterinario regular ¡Un peludo protegido es un peludo feliz!',
      onLearnMore: () => {}
    },
    {
      icon: '🧴',
      title: 'ARTÍCULOS DE HIGIENE',
      description: 'Productos de alta calidad para el mantenimiento diario: champús, cepillos y artículos esenciales.',
      fullDescription: 'Ponemos a tu disposición los productos de higiene de la más alta calidad para que puedas mantener a tu mascota limpia, sana y fresca entre nuestros servicios. Nuestra colección incluye champús de uso frecuente, cepillos especializados para cada tipo de pelaje y productos esenciales para la higiene oral y el cuidado de ojos y patas.',
      onLearnMore: () => {}
    },
    {
      icon: '🎁',
      title: 'PROMOCIÓN PARA MÁS DE UN PELUDITO',
      description: '¡Porque ellos no son solo mascotas… son familia!',
      fullDescription: 'Si traes 2 o más perritos, recibirás un descuento especial en su spa. Más amor, más cuidado… ¡y más ahorro para ti! Dales un momento de relax, limpieza y cariño. Nosotros nos encargamos del resto. ¡Trae a tus engreídos y consiéntelos hoy!',
      onLearnMore: () => {}
    }
  ];

  // Asignar función onLearnMore a cada servicio
  const servicesWithHandlers = servicesData.map(service => ({
    ...service,
    onLearnMore: () => setSelectedService(service)
  }));

  const closeModal = () => setSelectedService(null);

  return (
    <>
      <section id="nuestro-servicios" className="py-12 md:py-20 px-4 md:px-8 relative" style={{
        background: 'linear-gradient(180deg, #F0C84A 0%, #F8F8F8 50%, #F0C84A 100%)',
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(28, 100, 43, 0.05) 50px, rgba(28, 100, 43, 0.05) 100px)'
      }}>
        {/* Guirnalda decorativa superior */}
        <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-red-600 via-green-600 to-yellow-400 animate-pulse"></div>
        
        {/* Decoraciones navideñas flotantes más abundantes - Reducidas en móvil */}
        <div className="hidden md:block absolute top-10 left-[5%] text-6xl opacity-20 animate-pulse">🎄</div>
        <div className="hidden md:block absolute top-10 right-[5%] text-6xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>🎄</div>
        <div className="hidden sm:block absolute top-32 left-[15%] text-5xl opacity-20 animate-bounce">⭐</div>
        <div className="hidden sm:block absolute top-32 right-[15%] text-5xl opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="hidden md:block absolute top-56 left-[10%] text-4xl opacity-20">🎁</div>
        <div className="hidden md:block absolute top-56 right-[10%] text-4xl opacity-20">🎁</div>
        <div className="hidden md:block absolute bottom-20 left-[8%] text-5xl opacity-20 animate-spin-slow">❄️</div>
        <div className="hidden md:block absolute bottom-20 right-[8%] text-5xl opacity-20 animate-spin-slow">❄️</div>
        <div className="hidden sm:block absolute bottom-40 left-[20%] text-4xl opacity-20">🔔</div>
        <div className="hidden sm:block absolute bottom-40 right-[20%] text-4xl opacity-20">🔔</div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-25 relative">
            
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 relative animate-pulse" style={{
              background: 'linear-gradient(135deg, #C8281F 0%, #1C642B 50%, #C8281F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% auto',
              animation: 'gradient 3s linear infinite'
            }}>
            🎅 SERVICIOS ESPECIALES DE NAVIDAD 🎄
            </h2>
            <div className="inline-block px-4 md:px-8 py-2 md:py-3 rounded-full font-bold mb-4 md:mb-6 animate-pulse text-sm md:text-base" style={{
              background: 'linear-gradient(135deg, #C8281F 0%, #1C642B 100%)',
              color: '#F8F8F8',
              boxShadow: '0 8px 20px rgba(200, 40, 31, 0.4), 0 0 40px rgba(240, 200, 74, 0.3)',
              border: '2px solid #F0C84A'
            }}>
              ✨ ¡Ofertas Mágicas - Diciembre 2025! ✨
            </div>
            <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #dc2626, #fbbf24, #16a34a)' }}></div>
            <p className="text-base md:text-xl font-medium" style={{ color: '#991b1b' }}>
              Cuidado profesional con amor navideño para tu mascota
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesWithHandlers.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                fullDescription={service.fullDescription}
                onLearnMore={service.onLearnMore}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#77815b] to-[#8f9972] flex items-center justify-center">
                <span className="text-4xl">{selectedService.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#333333]">{selectedService.title}</h3>
            </div>

            <p className="text-[#666666] leading-relaxed text-base">
              {selectedService.fullDescription}
            </p>

            <button
              onClick={closeModal}
              className="mt-6 w-full py-3 bg-linear-to-r from-[#77815b] to-[#8f9972] text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
