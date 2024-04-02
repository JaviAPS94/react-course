import { useState } from 'react';
import './SearchBar.css'

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(
            //NEVER EVER EVER DO THIS
            // document.querySelector('input').value
            term
        )
    }

    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label>Enter search term</label>
                <input value={term} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default SearchBar;