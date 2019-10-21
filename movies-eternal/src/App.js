import React, { useState } from 'react';
import Search from './movies/search/Search';
import Movies from './movies/movies/Movies';
import './App.css';
import axios from 'axios';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchMovies = async text => {
        setLoading(true);

        const res = await axios.get('https://api.themoviedb.org/3/search/movie?query='+text+'&include_adult=false&page=1&language=en-US&api_key=f1b23c253e07d62f57826623668b43b1');

        setMovies(res.data.results);
        setLoading(false);
    }
    

    return (
        <div className="App">
            <div className="movies-container">
                <Search searchMovies={searchMovies} />
                <Movies loading={loading} movies={movies} />
            </div>
        </div>
    );

}

export default App;