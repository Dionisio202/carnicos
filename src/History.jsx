import React, { useRef, useEffect } from "react";

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
    <div className="text-center flex flex-col items-center p-4">
      <div className="relative w-11/12 md:w-4/5 flex justify-center flex-row-reverse" ref={containerRef}>
        <img src="/historyIMG.png" alt="History Image" className="img1 w-1/2 md:w-1/4 transition-transform duration-75" />
        <img src="/pig.png" alt="Pig Image" className="img2 w-1/2 md:w-1/3 transition-transform duration-75" />
      </div>
      <p className="text-white w-11/12 md:w-4/5 mt-10">
        Con una sólida experiencia de 21 años, nos enorgullece destacarnos como especialistas en la venta de carne de cerdo. Nuestra dedicación a lo largo de las décadas nos ha permitido perfeccionar la calidad y frescura de nuestros productos. Suministramos cortes que reflejan nuestro compromiso con la excelencia.
      </p>
    </div>
  );
}
