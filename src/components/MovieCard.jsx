import React from 'react';
import '../styles/MovieCard.css';

// Props by using ES6’s object destructuring
function MovieCard({movie: { Year, Poster, Title, Type }, onClick}) {
    return (
        <div className="movie">
            <div className="year-movie">
                <p>{Year}</p>
            </div>
            
            <div className='img-movie'>
                <img 
                    src={
                        Poster !== 'N/A'
                            ? Poster
                            : 'https://via.placeholder.com/400'
                    }
                    alt={Title}
                />
            </div>
            <div className="movie-footer">
                <span className='type'>{Type}</span>
                <h3 className="title">{Title}</h3>
                <button className="button" onClick={onClick}>
                    Show Details
                    <span className="button-effect"></span>
                </button>     
            </div>
        </div>
    );
}

export default MovieCard;
