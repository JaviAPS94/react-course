import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3002/books')
        setBooks(response.data)
    }

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3002/books/${id}`)
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks)
    }

    const updateBookTitle = async (id, title) => {
        const response = await axios.put(`http://localhost:3002/books/${id}`, { title })
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }
            }
            return book
        });
        setBooks(updatedBooks);
        // const updatedBooks = books.map((book) => {
        //     if (book.id === id) {
        //         return { ...book, title }
        //     }
        //     return book
        // });
        // setBooks(updatedBooks)
    }

    const handleCreateBook = async (title) => {
        const response = await axios.post('http://localhost:3002/books', { title })
        console.log(response)
        setBooks([...books, response.data])
        //BAD CODE
        // books.push({ id:123, title: title })
        // setBooks(books)
        //GOOD CODE
        // const updatedBooks = [
        //     ...books,
        //     {
        //         id: Math.round(Math.random() * 9999),
        //         title: title
        //     }
        // ]
        // setBooks(updatedBooks);
    }
    
    const valuesToShare = {
        books,
        fetchBooks,
        deleteBookById,
        updateBookTitle,
        handleCreateBook
    }

    return (
        <BooksContext.Provider value={valuesToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider }
export default BooksContext;