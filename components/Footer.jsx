import { React, useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [logo, setLogo] = useState("/white-logo.png");
  return (
    <div className="flex justify-between items-center bg-indigo-700 py-12 px-16 text-white">
      <div className="flex flex-col items-center">
        <h3 className="text-3xl font-bold mb-6">Contacto</h3>
        <Image src={`${logo}`} alt="Logo image" width={50} height={50} />
      </div>

      <ul>
        <li>soporte_seygob@gmail.com</li>
        <li>3178365382</li>
        <li>Calle 71c #91-29</li>
      </ul>
      <p className="mt-6">© 2022 Todos los derechos reservados.</p>
    </div>
  );
}
