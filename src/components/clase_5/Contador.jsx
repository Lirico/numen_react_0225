import { useContext } from "react";
import { CounterContext } from "@/context/CounterContextProvider";

const Contador = () => {

  const {state, incrementar, decrementar, resetar, mostrar, ocultar} = useContext(CounterContext);

  return (
    <>
      <div>
        <button onClick={decrementar}>-</button>
        <button onClick={resetar}>0</button>
        <button onClick={incrementar}>+</button>
        <button onClick={mostrar}>Mostrar</button>
        <button onClick={ocultar}>Ocultar</button>
      </div>
      {state.visible && <h3>{state.contador}</h3>}

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
