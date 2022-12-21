import Image from "next/image";
import React, { useState } from "react";

export default function Hero() {
  const [image, setImage] = useState("/hero-image.jpg");

  return (
    <div className="h-screen mb-12 custom-image">
      <div className="h-screen max-w-[1240px] m-auto flex flex-col sm:flex-row justify-between sm:items-center p-4 flex-wrap">
        <div className="sm:w-1/2 mt-32">
          <h1 className="text-3xl lg:text-5xl pr-4 font-black text-white">
            SOLUCIONES EMPRESARIALES Y DE GOBIERNO SEYGOB SAS
          </h1>
          <p className="font-extrabold mt-4 text-2xl text-amber-400">
            Trabajamos día a día para entregar a nuestros clientes soluciones
            integrales facilitando sus tareas diarias
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center mt-8">
          <Image
            className="rounded-lg shadow-xl shadow-slate-900/60"
            src={`${image}`}
            alt="Hero Image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
