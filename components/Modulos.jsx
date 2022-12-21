import { React } from "react";
import Item from "./Item";
export default function Modulos() {
  return (
    <div className="px-16 mb-12">
      <h2 className="mb-4 text-3xl font-bold">Modulos</h2>
      <div className="grid grid-cols-3 gap-5">
        <Item>Gestión de contabilidad</Item>
        <Item>Gestión presupuestal</Item>
        <Item>Gestión de recursos humanos</Item>
        <Item>Gestión de recursos físicos</Item>
        <Item>Gestión de impuestos municipales</Item>
        <Item>Gestión de tesoreria</Item>
      </div>
    </div>
  );
}
