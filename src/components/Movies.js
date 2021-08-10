import React from 'react';
import { movies } from '../data';

const Movies = () => {

  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
        return(
          <div>
            <h2 key={movie.title} style={{textDecoration: "underline"}}>{movie.title}</h2>
            <h2>Runtime: {movie.time}</h2>
            <h2>Genres:</h2>
            <ul>
              {movie.genres.map(genre => {
                return <li>{genre}</li>})}
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Movies;
