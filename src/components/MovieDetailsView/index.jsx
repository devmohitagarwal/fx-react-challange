import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../../APIs/Context";
import "./style.css";

function MovieDetailsView() {
  
  // Parse the URL for the parameter `movie-id`
  const queryParams = new URLSearchParams(window.location.search);
  const movieID = queryParams.get("id");

  // Get movie list from global context
  const { movieData } = useContext(MovieContext);  

  // Find the movie with the given ID
  const movie = movieData.results.filter((movie) => {return movie.id === Number(movieID);})[0]; 

  return (
    <div className="wrapper">
      <div className="details">
        <Link className="back-button" to={"/"}>
          Back
        </Link>

        <div className="details__name">{movie.title}</div>
        <div className="details__description">{movie.overview}</div>
        <div className="details__buttons">
          <div className="buttons__watch-now">Watch now</div>
          <div className="buttons__watch-trailer">Watch trailer</div>
        </div>
      </div>
      <div className="poster">
        <img className="poster__img" src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}></img>
      </div>
      <img className="backdrop__img" src={"https://image.tmdb.org/t/p/w300/" + movie.backdrop_path}></img>
    </div>
  );
}

export default MovieDetailsView;
