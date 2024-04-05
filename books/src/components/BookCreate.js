import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
    const { handleCreateBook } = useBooksContext();
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleCreateBook(title);
        setTitle('')
    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleFormSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}></input>
                <button className="button">Create</button>
            </form>
        </div>
    )
}

export default BookCreate;