import { React, useState } from "react";
import Image from "next/image";

export default function About() {
  const [image, setImage] = useState("/hero-image.jpg");
  return (
    <div className="flex justify-between bg-gradient-to-l from-cyan-500 to-indigo-900  py-12 px-16 text-white">
      <Image
        className="rounded-lg shadow-xl shadow-slate-900/60 mr-10"
        src={`${image}`}
        alt="Hero Image"
        width={500}
        height={500}
      />
      <div>
        <h3 className="text-3xl font-bold mb-6">¿Quienes somos?</h3>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          incidunt quo voluptates blanditiis assumenda culpa laboriosam vitae!
          Repudiandae inventore hic totam neque? Dolores laudantium commodi
          autem a ipsa nulla unde voluptate assumenda, ullam, accusantium id
          est, deserunt officia corporis. Vel explicabo rerum sit odit?
          Excepturi ipsa vitae eum error nesciunt?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          incidunt quo voluptates blanditiis assumenda culpa laboriosam vitae!
          Repudiandae inventore hic totam neque? Dolores laudantium commodi
          autem a ipsa nulla unde voluptate assumenda, ullam, accusantium id
          est, deserunt officia corporis. Vel explicabo rerum sit odit?
          Excepturi ipsa vitae eum error nesciunt?
        </p>
      </div>
    </div>
  );
}
