import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-slate-50 border-2 border-b-slate-300/75">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 ">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo image" width={50} height={50} />
          <h1 className="text-3xl tracking-widest text-slate-500 ml-6">
            SEYGOB
          </h1>
        </Link>
        <ul className="hidden sm:flex  text-slate-500">
          <li className="p-4 text-xl hover:text-blue-600 font-semibold">
            <Link href="/">Acerca de</Link>
          </li>
          <li className="p-4 text-xl hover:text-blue-600 font-semibold">
            <Link href="/soluciones">Soluciones</Link>
          </li>
          <li className="p-4 text-xl hover:text-blue-600 font-semibold">
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} className="text-blue-600" />
          ) : (
            <AiOutlineMenu size={20} className="text-blue-600" />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-slate-50 text-center"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-slate-50 text-center"
          }
        >
          <ul className="text-slate-500">
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-blue-600"
            >
              <Link href="/">Acerca de</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-blue-600"
            >
              <Link href="/soluciones">Soluciones</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-blue-600"
            >
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
