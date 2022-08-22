const APIKey = "df86f6e81c7bbc0d6f761ceb2af4f219";

 /**
 * Function to fetch the move dataset.
 *  @Returns a promise
 */
export const getMovieList = () => {
  return new Promise((resolve,reject) =>
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=en-GB&page=1`)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err)=>{reject(err)})
  );
};
