import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import TestMovieList from "./TestMovieList";

const TestMovie = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const getMovie = async () => {
    // const url = "http://www.omdbapi.com/?s=avengers&apikey=ebe923f6";
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((responseJson) => setMovies(responseJson.Search))
    //   .catch((error) => console.log(error));
    setLoading(true);
    const { data } = await axios.get("/movie");
    setMovies(data.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <TestMovieList movies={movies} getMovies={getMovie} isAuth={props.isAuth} />
  );
};

export default TestMovie;
