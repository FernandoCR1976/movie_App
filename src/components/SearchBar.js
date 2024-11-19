// src/components/SearchBar.js
import React, { useState } from 'react';
import { fetchMovies } from '../api/movieAPI';

const SearchBar = ({ setSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    if (searchQuery.length > 2) {
      const data = await fetchMovies('search/movie', searchQuery);
      setSearchResults(data.results || []);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Buscar películas..."
      className="search-bar"
    />
  );
};

export default SearchBar;
