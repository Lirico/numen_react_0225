import { useState } from "react";

const initialForm = {
    name: "",
    constellation: "",
    id: null
}

const SantosForm = () => {

    const [form, setForm] = useState(initialForm)

    const handleChangeName = () => {}

    const handleChangeConstellation = () => {}

    const handleSubmit = () => {}

    const handleReset = () => {}

  return (
    <div>
      <h3>Agregar</h3>
      <form>
        <input type="text" name="name" placeholder="Nombre" />
        <input type="text" name="constellation" placeholder="constellation" />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" />
      </form>
    </div>
  );
};

export default SantosForm;
