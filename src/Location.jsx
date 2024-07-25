import React from "react";
import { Divider } from "./dividerC";

export function Location() {
  return (
    <div className="bg-custom-gradient text-center p-4" id="Ubicacion">
      <Divider text="Ubicación" />
      <p className="text-gray-300 text-xl mb-4">Mercado Central Ambato - Sección Carnes de Cerdo, Puesto Número 126</p>
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="w-full lg:w-1/2">
          <iframe
            title="Google Maps Location"
            className="w-full h-64 lg:h-96"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d628.4997495321984!2d-78.62578052697162!3d-1.2421970215266653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d381bcfe54deeb%3A0x727275356594f0d8!2sMercado%20Central!5e0!3m2!1ses!2sec!4v1709322242056!5m2!1ses!2sec"
          ></iframe>
        </div>
        <div className="w-full lg:w-1/2">
          <iframe
            className="w-full h-64 lg:h-96"
            src="https://www.youtube.com/embed/qhAbSYLv-OI"
            title="Video Title"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
