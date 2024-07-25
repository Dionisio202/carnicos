import React, { useRef, useEffect } from "react";
import "./App.css";

export function History() {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const percentage = mouseX / containerRect.width;
    const img1 = container.querySelector(".img1");
    const img2 = container.querySelector(".img2");

    img1.style.transform = `translateX(${percentage * 100 - 37}%)`;
    img2.style.transform = `translateX(${percentage * 100 - 45}%)`;
  };

  useEffect(() => {
    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="history-container">
      <div className="image-container" ref={containerRef}>
        <img src="../src/img/historyIMG.png" alt="History Image" className="img1" />
        <img src="../src/img/pig.png" alt="Pig Image" className="img2" />
      </div>
      <p>
        Con una sólida experiencia de 21 años, nos enorgullece destacarnos como
        especialistas en la venta de carne de cerdo. Nuestra dedicación a lo
        largo de las décadas nos ha permitido perfeccionar la calidad y frescura
        de nuestros productos. Suministramos cortes que reflejan
        nuestro compromiso con la excelencia.
      </p>
    </div>
  );
}
