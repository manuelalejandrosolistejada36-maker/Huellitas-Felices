import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#333333] py-16 px-4 md:px-20 text-white mt-16 relative overflow-hidden">
      {/* Decoración navideña de fondo */}
      <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-red-600 via-green-600 to-red-600"></div>
      <div className="absolute top-4 left-10 text-3xl opacity-20">🎄</div>
      <div className="absolute top-4 right-10 text-3xl opacity-20">⭐</div>
      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-8">
        <div className="flex flex-col md:flex-row justify-center items-center">
          
          {/* Mensaje navideño */}
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-yellow-400 mb-2">
              ¡Felices Fiestas desde Huellitas Felices!
            </p>
            <p className="text-sm text-gray-300">
              Que esta Navidad esté llena de amor y patitas felices ✨
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {/* Derechos de Autor */}
          <p className="text-sm text-gray-400 mb-4 md:mb-0 text-center">
            © 2026 Spa Huellitas Felices Arequipa. Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;