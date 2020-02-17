import React, { PropTypes } from 'react';
import MovieCard from './MovieCard';
import type { SearchResult } from '../type';
import '../style/MovieList.css';

const MovieList = ({
  results,
  resultCount
}: {
  results: Array<SearchResult>,
  resultCount: number
}) => (
  <div className="movielist-wrapper">
    {resultCount > 0 ? results.map((moviecard, i) => <MovieCard key={moviecard.trackId || i} {...moviecard} />) : null}
  </div>
);

export default MovieList;
