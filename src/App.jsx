import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { getMovieList } from "./APIs/Fetch";
import MovieContext from "./APIs/Context";
import "./global.css";

/**
 * The starting page for your App
 */


function App() {
  //  Initailize variables to be consumed by context
  const [movieData, setMovieData] = useState({ results: [] });
  const value = { movieData, setMovieData };

  useEffect(() => {
    //On app initialize - fetch movie list from DB 
    getMovieList().then((response) => setMovieData(response));
  }, []);

  return (
    <>
      <BrowserRouter>
        <MovieContext.Provider value={value}>
          <Header />
          <main>
            <section>
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/movie"} element={<Details />} />
              </Routes>
            </section>
          </main>
        </MovieContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
