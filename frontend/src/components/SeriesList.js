import { React, useState, useEffect } from "react";
import MovieList from "./TestMovieList";
import Loader from "./Loader";

const SeriesList = () => {
  const [isloading, setisloading] = useState(true);
  const [series, setSeries] = useState([]);
  const getSeries = async () => {
    const url = "http://www.omdbapi.com/?s=harry potter&apikey=ebe923f6";

    const response = await fetch(url);
    const responseJson = await await response.json();

    console.log(responseJson);
    setSeries(responseJson.Search);
    setisloading(false);
  };
  useEffect(() => {
    getSeries();
  }, []);

  return isloading ? (
    <Loader />
  ) : (
    <MovieList turnOffCommenting movies={series} getMovies={getSeries} />
  );
};
export default SeriesList;
