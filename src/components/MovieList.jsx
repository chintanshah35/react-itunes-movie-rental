import React from 'react';
import MovieCard from './MovieCard';
import '../style/MovieList.css';

const MovieList = ({ results = [], resultCount = 0 }) => (
  <div className="movielist-wrapper">
    {resultCount > 0 ? results.map((moviecard, i) => (
      <MovieCard key={moviecard.trackId || i} {...moviecard} />
    )) : null}
  </div>
);

export default MovieList;
