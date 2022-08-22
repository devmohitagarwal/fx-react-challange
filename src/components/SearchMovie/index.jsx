import React from "react";
import { useContext, useRef } from "react";
import MovieContext from "../../APIs/Context";
import "./style.css";

function SearchMovie() {

  //Gets movie data and function to update it from context
  const { movieData, setMovieData } = useContext(MovieContext);

  // useRef to reference the search input-field
  const searchRef = useRef();

  function onSearch() {
    let searchText = searchRef.current.value;
    let results = movieData.results;

    // Clean the search text and check if textbox is not empty
    if (searchText.trim().length) {

      // Hide movies with titles that do not contain the searched text
      results.forEach((movie) => {movie.isHidden = !movie.title.includes(searchText);});
    } else {

      //Show all movies
      results.forEach((movie) => {movie.isHidden = false});
    }
    setMovieData({ ...movieData, results: results });
  }
  return (
    <div className="search-box">
      <input type="text" className="search-box__input" ref={searchRef} placeholder="Search movie by name"></input>
      <div className="search-box__button" onClick={onSearch}>
        Search
      </div>
    </div>
  );
}
export default SearchMovie;
