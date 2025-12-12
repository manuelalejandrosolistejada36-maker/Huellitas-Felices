"use client";

// components/ProductGallery.tsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';

// Define la interfaz para las propiedades del componente de la galería
interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

// Imágenes de la galería
const productImages: ProductImage[] = [
  { id: 1, src: '/image/huellitas-felices.jpeg', alt: 'Huellitas Felices' },
  { id: 2, src: '/image/huellitaslogo.png', alt: 'Logo Huellitas' },
  { id: 3, src: '/image/hf.png', alt: 'HF Logo' },
];

interface ProductGalleryProps {
  // Opcional: Para controlar si la galería debe cambiar automáticamente
  autoplay?: boolean; 
  // Opcional: Intervalo en milisegundos para el autoplay
  autoplayInterval?: number; 
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ 
  autoplay = true, 
  autoplayInterval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = productImages;
  const imagesCount = images.length;

  // Manejador para ir a la siguiente imagen
  const goToNextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === imagesCount - 1 ? 0 : prevIndex + 1));
  }, [imagesCount]);

  // Manejador para ir a la imagen anterior
  const goToPrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagesCount - 1 : prevIndex - 1));
  };

  // Efecto para el autoplay
  useEffect(() => {
    if (autoplay && imagesCount > 1) {
      const intervalId = setInterval(goToNextImage, autoplayInterval);
      // Limpia el intervalo cuando el componente se desmonta o las dependencias cambian
      return () => clearInterval(intervalId);
    }
  }, [autoplay, autoplayInterval, imagesCount, goToNextImage]);

  // Memoiza el estilo de transformación para el desplazamiento horizontal
  const galleryStyle = useMemo(() => ({
    transform: `translateX(-${currentIndex * 100}%)`,
  }), [currentIndex]);

  if (!images || imagesCount === 0) {
    return (
      <div className="flex items-center justify-center h-48 bg-gray-100 rounded-xl text-gray-500">
        No hay imágenes de productos disponibles.
      </div>
    );
  }

  return (
    <div className="relative mx-auto my-8 shadow-2xl rounded-xl overflow-hidden bg-white max-w-4xl px-4 md:px-0">
      
      {/* --- Contenedor Principal de la Galería con Deslizamiento --- */}
      {/* Proporción 4:3 usando padding-bottom trick */}
      <div className="relative w-full" style={{ paddingBottom: '75%' }}>
        <div className="absolute inset-0 flex overflow-hidden">
          <div 
            className="flex h-full transition-transform duration-500 ease-in-out" 
            style={galleryStyle}
          >
            {images.map((image) => (
              <div 
                key={image.id} 
                className="shrink-0 w-full h-full bg-gray-200"
              > 
                <img 
                  src={image.src}
                  alt={image.alt} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Controles de Navegación (Botones) --- */}
      {imagesCount > 1 && ( // Solo muestra los botones si hay más de una imagen
        <>
          <button
            onClick={goToPrevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-opacity z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
            aria-label="Imagen anterior"
          >
            &larr;
          </button>

          <button
            onClick={goToNextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-opacity z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
            aria-label="Imagen siguiente"
          >
            &rarr;
          </button>
        </>
      )}

      {/* --- Indicadores de Posición --- */}
      {imagesCount > 1 && ( // Solo muestra los indicadores si hay más de una imagen
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              } focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75`}
              aria-label={`Ir a la imagen ${index + 1}`}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default ProductGallery;