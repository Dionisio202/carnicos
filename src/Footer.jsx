import React from 'react';
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

export function Down() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-3 p-4 bg-custom-gray text-gray-300 items-center">
      <div className="text-center">
        <p>Información</p>
        <p>Ayuda</p>
      </div>
      <div className="text-center mt-4 md:mt-0">
        <p>Contacto</p>
        <p>0999755792</p>
        <p>Ambato, Ecuador</p>
        <p>Mercado Central, Marieta De Veintimilla, Ambato 180109</p>
      </div>
      <div className="flex justify-center items-center mt-4 md:mt-0 space-x-4">
        <FaWhatsapp size="2em" className="text-white fill-current mb-4 md:mb-0" />
        <FaMapMarkerAlt size="2em" className="text-white fill-current" />
      </div>
    </footer>
  );
}
