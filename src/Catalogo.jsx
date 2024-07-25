import React from "react";
import "./App.css"; 
import "./Content-Catalog";
import { ContentC } from "./Content-Catalog";
import { Divider } from "./dividerC";
export function Catalogo() {
  return (
    <>
    <div className="Catalog" id="Catalogo">
    <Divider text="Catálogo"/>
    <div className="componetCatalog">
    <ContentC text="Costillas de cerdo" ruta="../src/img/costillas.png"/>
    <ContentC text="Chuleta de lomo"/>
    <ContentC text="Chuleta de pierna"/>
    <ContentC text="Chuleta de bondiola"/>
    <ContentC text="Cuero de cerdo"/>
    <ContentC text="Pierna de cerdo"/>
    <ContentC text="Panceta de cerdo"/>
    <ContentC text="Chuleta de brazo"/>
    

    </div>

 
    </div>
  
    </>
   
  );
}
