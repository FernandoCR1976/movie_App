// src/App.js
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import CategoryCarousel from './components/CategoryCarousel';
import { fetchMovies } from './api/movieAPI';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState({
    popular: [],
    top_rated: [],
    upcoming: []
  });

  // Cargar categorías de películas al inicio
  useEffect(() => {
    const loadMovies = async () => {
      const popularMovies = await fetchMovies('movie/popular');
      const topRatedMovies = await fetchMovies('movie/top_rated');
      const upcomingMovies = await fetchMovies('movie/upcoming');

      setCategories({
        popular: popularMovies.results,
        top_rated: topRatedMovies.results,
        upcoming: upcomingMovies.results
      });
    };
    loadMovies();
  }, []);

  return (
    <div className="App">
      <NavBar setSearchResults={setSearchResults} />
      {searchResults.length > 0 ? (
        <CategoryCarousel movies={searchResults} title="Resultados de búsqueda" />
      ) : (
        <>
          <CategoryCarousel movies={categories.popular} title="Popular" />
          <CategoryCarousel movies={categories.top_rated} title="Top Rated" />
          <CategoryCarousel movies={categories.upcoming} title="Upcoming" />
        </>
      )}
    </div>
  );
}

export default App;
