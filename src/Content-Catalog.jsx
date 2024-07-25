import React from "react";

export function ContentC({ text, ruta }) {
  return (
    <div className="border border-white rounded p-4 flex flex-col items-center bg-transparent">
      <img 
        src={ruta} 
        className="w-full h-40 object-cover rounded mb-4 p-4 transform transition duration-500 ease-in-out hover:scale-110" 
        alt={text} 
        style={{ backgroundColor: 'transparent' }} // Asegura que el fondo sea transparente
      />
      <p className="text-gray-300 text-lg font-light text-center">{text}</p>
    </div>
  );
}
