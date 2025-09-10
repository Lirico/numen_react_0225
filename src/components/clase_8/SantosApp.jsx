import { useState } from "react";
import SantosForm from "./SantosForm";
import SantosTable from "./SantosTable";

const initialDb = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragon",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andromeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fenix",
  },
];

const SantosApp = () => {

    const [db, setDb] = useState(initialDb)
    const [dataToEdit, setDataToEdit] = useState(null)

    const createCaballero = () => {}

    const updateCaballero = () => {}

    const deleteCaballero = () => {}

  return (
    <div>
      <h2>CRUD App</h2>
      <SantosForm />
      <SantosTable data={db} />
    </div>
  );
};

export default SantosApp;
