import React, { useEffect, useState } from "react";
import { Button } from "antd";
import axios from "axios";

const TestMovieList = (props) => {
  const [wishList, setWishList] = useState([]);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("token") ? true : false;
    if (isAuth) {
      setShowButton(true);
      getData();
    }
  }, []);

  const getData = () => {
    axios
      .get("/favorite")
      .then(({ data }) => setWishList(data.data.movies))
      .catch((error) => console.log(error));
  };

  const addIntoList = (movie) => {
    axios
      .post("/favorite", {
        poster: movie.Poster,
        title: movie.Title,
        type: movie.Type,
        year: movie.Year,
        imdbID: movie.imdbID,
      })
      .then(({ data }) => getData())
      .catch((err) => console.log(err));
  };

  const removeFromList = (movie) => {
    axios
      .delete("/favorite/" + movie._id)
      .then(({ data }) => getData())
      .catch((error) => console.log(error));
  };

  return (
    <>
      {props.movies.map((movie, index) => {
        const i = wishList.findIndex((item) => item.imdbID === movie.imdbID);
        const isInList = i === -1 ? false : true;
        return (
          <div className="movie-poster">
            <img src={movie.Poster} alt="movie"></img>
            {showButton && (
              <Button
                onClick={() =>
                  isInList ? removeFromList(movie) : addIntoList(movie)
                }
                type="primary"
              >
                {isInList ? "Remove" : "Add"}
              </Button>
            )}
          </div>
        );
      })}
    </>
  );
};

export default TestMovieList;
