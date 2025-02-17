// src/components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
    />
    <div className="movie-info">
      <h3>{movie.title}</h3>
    </div>
  </div>
);

export default MovieCard;
