import React from 'react'


const TestMovieList = (props) =>{
    return(
        <>
        {props.movies.map((movie,index) => 
        <div className = 'movie-poster'>
            <img src = {movie.Poster} alt = "movie"></img>
        </div>)}
        </>
    )
}

export default TestMovieList;