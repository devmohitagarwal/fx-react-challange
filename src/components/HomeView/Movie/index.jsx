import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function MovieView(props) {

  //Pull movie from props
  const { movie } = props;

  return (
    <Link className="movie-item" to={"/movie?id=" + movie.id}>
      <div className="movie-item_banner-image">
        <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}></img>
      </div>
      <div className="movie-item__name">{movie.title}</div>
    </Link>
  );
}
export default MovieView;
