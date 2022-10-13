// Depensises
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component
import MovieModal from './MovieModal.jsx';
import MovieCard from './MovieCard.jsx';

// Styles
import '../styles/App.css';
import SearchIcon from '/images/search.svg';

const App = () => {
    
    //Api URL
    const api = 'https://www.omdbapi.com/?';

    //api key
    const apiKey = 'apikey=46d32f18';

    // Full movie description (need add &plot=full) http://www.omdbapi.com/?i=tt6320628&plot=full
    const plotFull = '&plot=full'

    // UseState - Saves data from movies array after API fetched data.
    const [movies, setMovies] = useState([]);

    // UseState - Saves data from the input field when searching for movies
    const [searchTerm, setSearchTerm] = useState('');

    // UseState for test, get data for single movie
    const [movieDetails, setMovieDetails] = useState({});

    const [selectedId, setSelectedId] = useState(null);

    //Modal window
    const [show, setShow] = useState(false);

    // === API function start ===
    // Get Movie by Title search
    const searchMovies = (title) => {
        axios.get(api + apiKey + `&s=${title}`).then((res) => {
            if (res) {
                setMovies(res.data.Search);
            }
        });
    };

    //Get Movie details
    const getDetails = (e, id) => {
        e.preventDefault();

        setSelectedId(id);
        axios.get(api + apiKey + `&i=${id}` + plotFull).then((res) => {
            if (res) {
                setMovieDetails(res.data);
                showModal();
            }
        });
    };
    // === API function end ===

    // Search movies with press Enter
    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            return searchMovies(searchTerm);
        }
    };
    // For display the first movies
    useEffect(() => {
        searchMovies('Spider man');
    }, []);

    //modal config logice
    const showModal = () => {
        setShow(true);
    };

    const hideModal = () => {
        setShow(false);
        setMovieDetails();
    };

    const handleClose = () => {
        hideModal();
    };
    
    return (
        <div className="app">
            <h1 className='app-title'>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search from movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleSearch}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="movie-list">
                    {movies?.length > 0 ? (
                        <div className="movie-list">
                            {movies.map((movie) => (
                                <MovieCard
                                    movie={movie}
                                    onClick={(e) => getDetails(e, movie.imdbID)}
                                    key={movie.imdbID}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}

            {/* modal */}
            {movieDetails && show ? (
                <MovieModal
                    movieInfo={movieDetails}
                    handleClose={handleClose}
                />
            ) : (
                <div className="modal display-none"></div>
            )}
        </div>
    );
};

export default App;
