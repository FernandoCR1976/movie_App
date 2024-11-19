// src/api/movieAPI.js
const API_KEY = '19edb769888f8be81244d69113f40622';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint, query = '') => {
    const url = query
      ? `${BASE_URL}/${endpoint}?api_key=${API_KEY}&query=${query}`
      : `${BASE_URL}/${endpoint}?api_key=${API_KEY}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
      return null;
    }
  };