import { image, img } from 'motion/react-client';
import React from 'react';

/**
 * Componente funcional para la página "Sobre Nosotros" con un diseño minimalista.
 * Incluye secciones de Narrativa/Principios y una presentación del Equipo.
 */
const SobreNosotros: React.FC = () => {
  return (
    // Sección principal con tema navideño
    <section id="sobre-nosotros" className="py-16 md:py-24 lg:py-32 transition duration-500 relative" style={{
      background: 'linear-gradient(180deg, #FFF5F5 0%, #FEE2E2 100%)',
      backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(22, 163, 74, 0.05) 0%, transparent 50%)'
    }}>
      {/* Borde decorativo superior */}
      <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-green-600 via-yellow-400 to-green-600"></div>
      
      {/* Decoraciones navideñas flotantes */}
      <div className="hidden md:block absolute top-20 left-[5%] text-5xl opacity-20 animate-pulse">🎄</div>
      <div className="hidden md:block absolute top-20 right-[5%] text-5xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>🎄</div>
      <div className="hidden sm:block absolute bottom-32 left-[10%] text-4xl opacity-20 animate-bounce">⭐</div>
      <div className="hidden sm:block absolute bottom-32 right-[10%] text-4xl opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>⭐</div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === ÁREA 1: NARRATIVA Y PRINCIPIOS === */}
        <div className="text-center mb-16 lg:mb-24 relative">
          
          <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{
            background: 'linear-gradient(135deg, #dc2626 0%, #16a34a 50%, #dc2626 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Sobre Nosotros
          </h1>
          <p className="text-base md:text-lg font-semibold mt-4" style={{ color: '#991b1b' }}>
            ✨ Amor y cuidado navideño para tus mascotas ✨
          </p>
        </div>

        {/* Columna Estrecha: Principios Navideños */}
        <div className="flex justify-center gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8 flex-wrap pt-4">
          {['Amor', 'Dedicación', 'Felicidad'].map((principle, index) => {
            const icons = ['🎄', '❤️', '🎁'];
            const descriptions = [
              'Tratamos a cada mascota con el amor y cuidado que merece en esta temporada especial.',
              'Nos dedicamos a brindar el mejor servicio, porque tu mascota es parte de tu familia.',
              'Nuestra misión es llevar felicidad y bienestar a cada patita que atendemos.'
            ];
            return (
              <div key={principle} className="text-center max-w-xs p-4 md:p-6 rounded-2xl relative" style={{
                background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(22, 163, 74, 0.1) 100%)',
                border: '2px solid #fbbf24',
                boxShadow: '0 4px 12px rgba(220, 38, 38, 0.2)'
              }}>
                <div className="text-4xl md:text-5xl mb-3 md:mb-4 animate-pulse">{icons[index]}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3" style={{ color: '#166534' }}>
                  {principle}
                </h3>
                <p className="leading-relaxed" style={{ color: '#991b1b' }}>
                  {descriptions[index]}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SobreNosotros;