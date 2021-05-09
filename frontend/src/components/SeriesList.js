import { React, useState, useEffect } from "react";
import MovieList from "./TestMovieList";
import Loader from "./Loader";
import SearchMovies from './SearchMovies'

const SeriesList = () => {
  const [isloading, setisloading] = useState(true);
  const [series, setSeries] = useState([]);
  const [searchItem, setSearchItem] = useState('')


  const getSeries = async () => {
    // const url = "http://www.omdbapi.com/?s=harry potter&apikey=ebe923f6";
    const url = `http://www.omdbapi.com/?s=${searchItem}&apikey=ebe923f6`
    const response = await fetch(url);
    const responseJson = await await response.json();

    // setSeries(responseJson.Search);
    if(responseJson.Search){
      setSeries(responseJson.Search);
    }else{
        const url = `http://www.omdbapi.com/?s=TOY&apikey=ebe923f6`
        const response = await fetch(url);
        const responseJson = await  await response.json();
        setSeries(responseJson.Search);
    }
    setisloading(false);
  };
  useEffect(() => {
    getSeries();
  }, [searchItem]);

  return isloading ? (
    <Loader />
  ) : (
    <div>
    <div  style = {{marginTop:'30px'}}>
    <SearchMovies searchItem = {searchItem} setSearchItem = {setSearchItem}></SearchMovies>
    </div>
    <div>
    <MovieList turnOffCommenting movies={series} getMovies={getSeries} />
    </div>
    </div>
  );
};
export default SeriesList;
