import React from 'react';
// Props by using ES6’s object destructuring { movie: { imdbID, Year, Poster, Title, Type } }
function MovieCard({ movie: { imdbID, Year, Poster, Title, Type } }) {
    const handlClick = (e) => {
        console.log(e.target.value);
    };

    return (
        <div className="movie" onClick={handlClick}>
            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img
                    src={
                        Poster !== 'N/A'
                            ? Poster
                            : 'https://via.placeholder.com/400'
                    }
                    alt={Title}
                />
            </div>

            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;
