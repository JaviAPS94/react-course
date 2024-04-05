import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
    const { updateBookTitle } = useBooksContext();

    const [ title, setTitle ] = useState(book.title)

    const handleOnChange = (event) => {
        setTitle(event.target.value);
    }

    const handleEditClick = (event) => {
        event.preventDefault()
        onSubmit()
        updateBookTitle(book.id, title)
    }

    return (
        <form className="book-edit" onSubmit={handleEditClick}>
            <input className="input" value={title} onChange={handleOnChange}/>
            <button className="button is-primary">
                Save
            </button>
        </form>
    )
}

export default BookEdit;