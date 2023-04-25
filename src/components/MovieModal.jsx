import React from 'react';
import '../styles/MovieModal.css';

function MovieModal({ movieInfo, handleClose }) {
  return (
    <div className="modal display-block">
      <div className="modal-main">
        <div className="modal-score">
          <div className="modal-rating">
            Rated: <span>{movieInfo.Rated}</span>
          </div>
          <div className="modal-rating">
            Imdb: <span>{movieInfo.imdbRating}</span>
          </div>
          <div className="modal-rating">
            Metacritic: <span>{movieInfo.Metascore}</span>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-img">
            <img
              src={
                movieInfo.Poster !== 'N/A'
                  ? movieInfo.Poster
                  : 'https://via.placeholder.com/400'
              }
              alt="Poster"
            />
          </div>

          <div className="modal-info">
            <div className="info-item">
              <h5>Actors:</h5>
              <p>{movieInfo.Actors}</p>
            </div>
            <div className="info-item">
              <h5>Genre:</h5>
              <p>{movieInfo.Genre}</p>
            </div>
            <div className="info-item">
              <h5>Director:</h5>
              <p>{movieInfo.Director}</p>
            </div>
            <div className="info-item">
              <h5>Released:</h5>
              <p>{movieInfo.Released}</p>
            </div>
            <div className="info-item">
              <h5>Country:</h5>
              <p>{movieInfo.Country}</p>
            </div>
            <div className="info-item">
              <h5>Plot:</h5>
              <p>{movieInfo.Plot}</p>
            </div>
          </div>
        </div>

        <div className="button-container">
          <button className="button" onClick={handleClose}>
            Close
            <span className="button-effect"></span>
          </button>
        </div>

        <div className="modal-score">
          <div className="modal-rating">
            Awards: <span>{movieInfo.Awards}</span>
          </div>
          <div className="modal-rating">
            Box office: <span>{movieInfo.BoxOffice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
