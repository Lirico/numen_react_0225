// Paso 1 - importar la funcion creadora de contexto (la nave)
import { createContext, useState } from "react";

// Paso 2 - Preprar la nave
export const BooksContext = createContext();

const BooksContextProvider = (props) => {
  // Paso 3 - Preprar la prop a exportar (el paquete)
  const [books, setBooks] = useState(() => [
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
    },
    {
      title: "Harry Potter",
      author: "J.K Rowling",
    },
    {
      title: "El Principito",
      author: "Antoine D'saint Exupery",
    },
  ]);

  // Paso 4 - Llamar al flaco de la gorra (provider)
  // Paso 5 - Definir la mano del flaco y ponerle el paquete en la mano (value)
  // Paso 6 - Definir la lista de hijos (children)
  // Paso 7 - Exportar la nave
  return <BooksContext.Provider value={books}>
        {props.children}
  </BooksContext.Provider>;
};

export default BooksContextProvider;
