import { createContext, useReducer } from "react";
import { TYPES } from "@/reducer_counter/counterActions";
import { reducer } from "@/reducer_counter/counterReducer";
import { counterInitialState } from "@/reducer_counter/counterInitialState";

export const CounterContext = createContext();

const CounterContextProvider = ({children}) => {
  const { INCREMENTAR, DECREMENTAR, RESETEAR, MOSTRAR, OCULTAR } = TYPES;

  const [state, dispatch] = useReducer(reducer, counterInitialState);

  const incrementar = () => dispatch({ type: INCREMENTAR, payload: 10 });

  const resetar = () => dispatch({ type: RESETEAR });

  const decrementar = () => dispatch({ type: DECREMENTAR, payload: 10 });

  const mostrar = () => dispatch({ type: MOSTRAR });

  const ocultar = () => dispatch({ type: OCULTAR });

  const value = {state, incrementar, decrementar, resetar, mostrar, ocultar}

  return (
    <CounterContext.Provider value={value}>
        {children}
    </CounterContext.Provider>
  )
};

export default CounterContextProvider;
