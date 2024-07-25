import React from "react";
import "./App.css"; 

export function ContentC({text,ruta}) {
    return (
      <div className="catalog-container contenedor"> 
        <div className="card ">
          <img src={ruta} className="imgCatalog imgHover" alt="Costillas de cerdo" />
          <p>{text}</p>
        
        </div>
      </div>
    );
  }
  
