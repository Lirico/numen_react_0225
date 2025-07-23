import { useState, useEffect } from "react";





const Reloj = () => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        let temporizador;

        if(visible){ // Montaje
            temporizador = setInterval(() => setHora(() => new Date().toLocaleTimeString()), 1000); // Actualiz.
        } 

        return () => clearInterval(temporizador) // Desmontaje
    }, [visible])
    

  return (
    <>
      <h2>Reloj con hooks</h2>
      {visible && <h3>{hora}</h3>}
      <button onClick={() => setVisible(() => !visible)}>Iniciar/Detener</button>
    </>
  );
};

export default Reloj;
