import React, { useState, useEffect } from 'react';

import MovieCard from './MovieCard.jsx';
import SearchIcon from '/images/search.svg';
import '../styles/App.css';

const API_URL = 'https://www.omdbapi.com?apikey=46d32f18';

// Just example of object. Was inside "console log" after I'm fetched data from API.

// const movie1 = {
//     Title: 'Batman Begins',
//     Year: '2005',
//     imdbID: 'tt0372784',
//     Type: 'movie',
//     Poster: 'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
// };

const App = () => {
    // UseState - Saves data from movies array after API fetched data.
    const [movies, setMovies] = useState([]);

    // UseState - Saves data from the input field when searching for movies
    const [searchTerm, setSearchTerm] = useState('');

    // UseState for test, get data for single movie
    // const [infoMovie, setinfoMovie] = useState({});

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        // console.log(data.Search);
    };
    // It was just a test. Create functionality for the film description.
    // const searchInfoMovie = async (title) => {
    //     const responseMovie = await fetch(`${API_URL}&t=${title}&plot=full`);
    //     const dataMovie = await responseMovie.json();
    //     setinfoMovie(dataMovie);
    //     console.log(infoMovie);
    // };

    const handleKeyDown = (event) => {
        // console.log('User pressed: ', event.key);

        // console.log(message);

        if (event.key === 'Enter') {
            // 👇️ your logic here
            return searchMovies(searchTerm);
        }
    };

    useEffect(() => {
        // Deploy
        searchMovies('Spider man');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search from movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.imdbID} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
};

export default App;
