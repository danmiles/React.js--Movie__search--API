import React from 'react';
import '../styles/MovieCard.css';

function MovieCard(props) {
    return (
        <div className="movie">
            <div className="year-movie">
                <p>{props.movie.Year}</p>
            </div>
            
            <div className='img-movie'>
                <img 
                    src={
                        props.movie.Poster !== 'N/A'
                            ? props.movie.Poster
                            : 'https://via.placeholder.com/400'
                    }
                    alt={props.movie.Title}
                />
            </div>
            <div className="movie-footer">
                <span className='type'>{props.movie.Type}</span>
                <h3 className="title">{props.movie.Title}</h3>
                <button className="button" onClick={props.onClick}>
                    Show Details
                    <span className="button-effect"></span>
                </button>     
            </div>
        </div>
    );
}

export default MovieCard;
