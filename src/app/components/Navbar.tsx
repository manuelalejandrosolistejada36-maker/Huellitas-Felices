"use client";

import React, { useEffect, useState } from 'react';
const Whatsapp = 'https://wa.me/51953293677';

const navItems = ['Nuestro Servicios', 'Sobre Nosotros', 'Testimonios'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Evitar ejecutar en SSR
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Chequeo inicial
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
      scrolled ? 'navbar--scrolled' : 'navbar--top'
    }`}>
      <div
        className={`navbar-inner px-4 md:px-8 flex justify-between items-center transition-all duration-300 ease-in-out ${
          scrolled ? 'max-w-5xl mx-auto py-2' : 'w-full py-4'
        }`}
      >
        {/* Logo/Ícono */}
        <div className="flex items-center space-x-2">
          <a href="/" className="text-lg md:text-xl font-bold cursor-pointer hover:opacity-80 transition-opacity duration-150" style={{ color: '#F8F8F8' }}>
            <span className="hidden sm:inline">🎄 Huellitas Felices 🎅</span>
            <span className="sm:hidden">🎄 Huellitas 🎅</span>
          </a>
        </div>

        {/* Elementos de Navegación (Solo Desktop) */}
        <nav className="hidden lg:flex space-x-8">
          <a
            href="#nuestro-servicios"
            className="font-medium transition duration-150"
            style={{ color: '#F8F8F8' }}
          >
            Nuestros Servicios
          </a>
          <a
            href="#sobre-nosotros"
            className="font-medium transition duration-150"
            style={{ color: '#F8F8F8' }}
          >
            Sobre Nosotros
          </a>
          <a
            href="#testimonios"
            className="font-medium transition duration-150"
            style={{ color: '#F8F8F8' }}
          >
            Testimonios
          </a>
        </nav>

        {/* Íconos y Teléfono */}
        <div className="flex items-center space-x-6">
          <a
            href={Whatsapp}
            className="contact-btn hidden sm:flex items-center space-x-2 rounded-full transition duration-150"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-sm font-semibold" style={{ color: '#F8F8F8' }}>Contáctame</span>
          </a>
          
          {/* Botón menú hamburguesa (solo móvil) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden z-50 p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 transition-all" style={{ backgroundColor: '#F8F8F8' }}></div>
              <div className="w-6 h-0.5 transition-all" style={{ backgroundColor: '#F8F8F8' }}></div>
              <div className="w-6 h-0.5 transition-all" style={{ backgroundColor: '#F8F8F8' }}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="absolute right-0 top-0 h-full w-64 shadow-2xl p-6 pt-20" 
            style={{ background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-6">
              <a
                href="#nuestro-servicios"
                className="text-white font-medium text-lg hover:text-yellow-400 transition duration-150"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nuestros Servicios
              </a>
              <a
                href="#sobre-nosotros"
                className="text-white font-medium text-lg hover:text-yellow-400 transition duration-150"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre Nosotros
              </a>
              <a
                href="#testimonios"
                className="text-white font-medium text-lg hover:text-yellow-400 transition duration-150"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonios
              </a>
              <a
                href={Whatsapp}
                className="inline-block text-center bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition duration-150 border-2 border-yellow-400"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contáctame
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;