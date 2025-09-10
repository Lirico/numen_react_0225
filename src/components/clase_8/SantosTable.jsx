import React from "react";
import SantosTableRow from "./SantosTableRow";

const SantosTable = ({data}) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {
                data.map(caballero => <SantosTableRow caballero={caballero}/>)
            }
        </tbody>
      </table>
    </div>
  );
};

export default SantosTable;
