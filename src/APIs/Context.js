import React from "react";

 /**
 * A global context to share the movie dataset.
 * Initialize the context with empty values
 */
const MovieContext = React.createContext({
  movieData: {},
  setmovieData: () => {},
});

export default MovieContext;
