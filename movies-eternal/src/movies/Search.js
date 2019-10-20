import React, { useState } from 'react'

const Search = ({ searchMovies }) => {
    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if(text !== "") {
            searchMovies(text);
        }
    }

    const onChange = e => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input type='text' name='text' placeholder='Search movies...' value={text} onChange={onChange} />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Search