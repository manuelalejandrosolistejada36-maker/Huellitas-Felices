import { image, img } from 'motion/react-client';
import React from 'react';

// --- DATOS DEL EQUIPO (Puedes mover esto a un archivo de configuración si lo prefieres) ---
const teamMembers = [
  {
    name: "Max Castañeda",
    title: "Director y fundador",
    description: "Lidera la visión y estrategia general de la empresa, asegurando que cada proyecto refleje la calidad y el compromiso de Huellitas Felices.",
  },
  {
    name: "El Manu",
    title: "El creador de la pagina",
    description: "Guapo, Poderoso, Talentoso, Bien hermoso, Inteligente y Precioso."
  },
];

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

        {/* === ÁREA 2: NUESTRO EQUIPO NAVIDEÑO === */}
        <div className="mt-24 pt-16 relative" style={{ borderTop: '3px solid #dc2626' }}>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-red-600 to-green-600 text-white px-6 py-2 rounded-full font-bold">
            ❄️ EQUIPO ❄️
          </div>
          
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 md:mb-16" style={{
            background: 'linear-gradient(135deg, #16a34a 0%, #dc2626 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Conoce a Nuestro Equipo
          </h2>
          
          <div className="flex justify-center gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-16 flex-wrap">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center max-w-xs p-4 md:p-6 rounded-2xl relative" style={{
                background: 'linear-gradient(135deg, rgba(22, 163, 74, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%)',
                border: '2px solid #fbbf24',
                boxShadow: '0 4px 12px rgba(22, 163, 74, 0.2)'
              }}>
                {/* Decoración de esquina */}
                <div className="absolute top-2 right-2 text-2xl animate-pulse">🎁</div>
                
                {/* Marcador de posición para la foto */}
                <div className="w-32 h-32 rounded-full mx-auto mb-6 border-4 relative overflow-hidden" style={{
                  background: 'linear-gradient(135deg, #dc2626 0%, #16a34a 50%, #fbbf24 100%)',
                  borderColor: '#fbbf24',
                  boxShadow: '0 8px 20px rgba(220, 38, 38, 0.3)'
                }}>
                  <div className="absolute inset-0 flex items-center justify-center text-5xl">
                    {index === 0 ? '🐶' : '🐱'}
                  </div>
                </div> 

                <h3 className="text-xl font-bold mb-2" style={{ color: '#166534' }}>
                  {member.name}
                </h3>
                <p className="font-bold mb-3" style={{ color: '#dc2626' }}>
                  {member.title}
                </p>
                <p className="text-base max-w-xs mx-auto" style={{ color: '#991b1b' }}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;