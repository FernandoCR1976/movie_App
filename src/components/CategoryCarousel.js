// src/components/CategoryCarousel.js
import React from 'react';
import './CategoryCarousel.css';

const CategoryCarousel = ({ movies, title }) => {
  return (
    <div className="carousel">
      <h2>{title}</h2>
      <div className="carousel-content">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
