import React, { useEffect, useState } from "react";
import TestMovieList from "./TestMovieList";

const TestMovie = () => {
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const url = "http://www.omdbapi.com/?s=avengers&apikey=ebe923f6";

    const response = await fetch(url);
    const responseJson = await await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <div>
        <TestMovieList movies={movies}></TestMovieList>
      </div>
    </div>
  );
};

export default TestMovie;
