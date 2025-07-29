// Paso 1 - Importar el contexto
import { BooksContext } from "@/context/BooksContextProvider"
// Paso 2 - Importar al cartero (useContext)
import { useContext } from "react"


const BooksList = () => {

  // Paso 3 - Extraer las props de la nave
  const books = useContext(BooksContext)

  return (
    <>
        <ul>
            {
              books.map(book => <li>
                <p>{book.title}</p>
                <h3>{book.author}</h3>
              </li>)
            }
        </ul>
    </>
  )
}

export default BooksList