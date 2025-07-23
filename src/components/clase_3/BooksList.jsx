import { useState } from "react"


const BooksList = () => {

    const [books, setBooks] = useState(() => [
        {
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien"
        },
        {
            title: "Harry Potter",
            author: "J.K Rowling"
        },
        {
            title: "El Principito",
            author: "Antoine D'saint Exupery"
        },
    ])

    const addBook = (book) => setBooks((books) => {
        return [
            ...books,
            book
        ]
    })

  return (
    <>
        <ul>
            {
                books.map(({title, author}) => <li>
                    <p>{title}</p>
                    <h3>{author}</h3>
                </li>)
            }
        </ul>
        <button onClick={() => addBook({
            title: "El mundo de Pepe",
            author: "Pepe"
        })}>Add Pepe</button>
        <button onClick={() => addBook({
            title: "El mundo de Doge",
            author: "Doge"
        })}>Add Doge</button>
        <button onClick={() => addBook({
            title: "El mundo de Shivainu",
            author: "Shivainu"
        })}>Add Shivainu</button>
    </>
  )
}

export default BooksList