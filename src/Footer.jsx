import React from 'react';
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import "./App.css";
export function Down() {
    return (
      <footer className='footerC'>
        <div className="info-container">
          <p>Información</p>
          <p>Ayuda</p>
        </div>
        <div className="contac-container">
          <p>Contacto</p>
          <p>099755792</p>
          <p>Ambato, Ecuador</p>
          <p>Mercado Central, Marieta De Veintimilla, Ambato 180109</p>
        </div>
        <div className="icon-container">
        <FaWhatsapp size="2em" className="whatsapp-icon" />
        <FaMapMarkerAlt size="2em" className="navigation-icon" />
        </div>
      </footer>
    );
  }
  