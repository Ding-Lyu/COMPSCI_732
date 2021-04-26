import React, { useEffect, useState } from 'react'
import TestMovieList from './TestMovieList'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Movie.css'


const TestMovie = () =>{
    const [movies, setMovies] = useState([]);
    const getMovie = async() =>{
        const url = "http://www.omdbapi.com/?s=avengers&apikey=ebe923f6"

        const response = await fetch(url);
        const responseJson = await  await response.json();

        console.log(responseJson);
        setMovies(responseJson.Search);
    }
    useEffect(()=>{
        getMovie();
    },[]);

    return <div className = 'container-fluid movie-layout'>
        <div className = 'row'>
        <TestMovieList movies = {movies}></TestMovieList>
        </div>   
    </div>
}

export default TestMovie;