import React from "react";
import { useContext } from "react";
import MovieView from "../Movie";
import MovieContext from "../../../APIs/Context";

import "./style.css";

function MovieListView() {
  //Get movie list from global context
  const { movieData } = useContext(MovieContext);
  
  return (
    <div className="list-container">
      <div className="list-container__title">TOP RATED MOVIES</div>
      <div className="list-container__wrapper">
        {movieData.results.map((movie) => {

          // Hide movies filtered out by search results
          if (movie.isHidden !== true) { 
            return <MovieView movie={movie} key={movie.id}></MovieView>;
          }
        })}
      </div>
    </div>
  );
}

export default MovieListView;
