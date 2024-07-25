import React from 'react';

export function NavBar() {
  const numeroTelefono = '+593999755792';
  const mensajeWhatsApp = '¡Hola! Estoy interesado en comprar carne de cerdo. ¿Podrías proporcionarme más información?';

  const generarEnlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensajeWhatsApp)}`;
  return (
    <div className="flex justify-center items-center m-1">
      <nav className="flex flex-col md:flex-row items-center p-4 mx-auto text-center w-full md:w-auto">
        <div className="flex items-center justify-center transform transition duration-500 ease-in-out hover:scale-110 mb-4 md:mb-0 md:mr-8">
          <div className="bg-white rounded-full overflow-hidden w-12 h-12 flex justify-center items-center text-center">
            <img src="/Logo_P.png" alt="Logo" className="block mx-auto max-w-full max-h-full" />
          </div>
          <span className="text-2xl text-white ml-3">Frigorífico Paty</span>
        </div>
        <ul className="flex flex-col md:flex-row m-0 p-0 justify-center w-full md:w-auto">
          <li className="flex items-center mb-4 md:mb-0 mx-4 list-none text-white text-xl">
            <a className="no-underline text-white transition duration-500 ease-in-out hover:text-yellow-600 hover:text-lg" href="#Catalogo">Productos</a>
          </li>
          <li className="flex items-center mb-4 md:mb-0 mx-4 list-none text-white text-xl">
            <a className="no-underline text-white transition duration-500 ease-in-out hover:text-yellow-600 hover:text-lg" href={generarEnlaceWhatsApp}>Contacto</a>
          </li>
          <li className="flex items-center mx-4 list-none text-white text-xl">
            <a className="no-underline text-white transition duration-500 ease-in-out hover:text-yellow-600 hover:text-lg" href="#Ubicacion">Ubicación</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
