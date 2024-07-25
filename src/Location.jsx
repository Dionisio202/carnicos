import React from "react";
import "./App.css";
import { Divider } from "./dividerC";

export function Location() {
    return (
        <div className="location-Container" id="Ubicacion">
            <Divider text="Ubicación" />
            <p1 className="txtLocation">Mercado Central Ambato - Sección Carnes de Cerdo, Puesto Número 126</p1>
            <div className="location-subtontainer">
            <div className="maps">
                <iframe
                    title="Google Maps Location"
                    width="550"
                    height="450"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d628.4997495321984!2d-78.62578052697162!3d-1.2421970215266653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d381bcfe54deeb%3A0x727275356594f0d8!2sMercado%20Central!5e0!3m2!1ses!2sec!4v1709322242056!5m2!1ses!2sec"
></iframe>
            </div>
            <div>
            <iframe
                width="550"
                height="450"
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
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d628.4997495321984!2d-78.62578052697162!3d-1.2421970215266653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d381bcfe54deeb%3A0x727275356594f0d8!2sMercado%20Central!5e0!3m2!1ses!2sec!4v1709322242056!5m2!1ses!2sec"