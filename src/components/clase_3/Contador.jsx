import { useState } from "react";


const initialState = 0

const Contador = () => {

    // contador = 0
    const [contador, setContador] = useState(initialState)

    const incrementar = () => setContador((contador) => contador + 1)
    
    const resetar = () => setContador(initialState)

    const decrementar = () => setContador((contador) => contador - 1)

  return (
    <>
      <div>
        <button onClick={decrementar}>-</button>
        <button onClick={resetar}>0</button>
        <button onClick={incrementar}>+</button>
      </div>
      <h3>{contador}</h3>

      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
        }
        h3 {
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Contador;



