import React from "react";
import { ContentC } from "./Content-Catalog";
import { Divider } from "./dividerC";

const catalogItems = [
  { text: "Costillas ", ruta: "/costillas.png" },
  { text: "Chuleta de lomo", ruta:"/chuleta_de_lomo.png" },
  { text: "Chuleta de pierna" , ruta:"chuleta_de_pierna.png"},
  { text: "Cuero " , ruta:""},
  { text: "Pierna " , ruta:"pierna.png"},
  { text: "Panceta " , ruta:"panceta.png"},
  { text: "Chuleta de brazo" , ruta:"chuleta_de_brazo.png"},
  { text: "Lomo " , ruta:"lomo.png"},
  { text: "Suave de pierna", ruta:"suaveP.png" },
  { text: "Brazos" , ruta:"brazo.png"},
  { text: "Patas" ,ruta:"/patas.png"},
  { text: "Lonja" , ruta:"lonja.png"},
];

export function Catalogo() {
  return (
    <div className="bg-custom-gray p-4" id="Catalogo">
      <Divider text="Catálogo" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {catalogItems.map((item, index) => (
          <ContentC key={index} text={item.text} ruta={item.ruta} />
        ))}
      </div>
    </div>
  );
}
