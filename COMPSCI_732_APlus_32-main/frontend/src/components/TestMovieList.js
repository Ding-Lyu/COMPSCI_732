import React, { useEffect, useState } from "react";
import { Row } from "antd";
import axios from "axios";
import MovieThumbnail from "./MovieThumbnail";

const MovieList = (props) => {
  const [wishList, setWishList] = useState([]);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("token") ? true : false;
    if (isAuth) {
      setShowButton(true);
      getData();
    }
  }, []);

  useEffect(() => {
    if (!props.isAuth) {
      setShowButton(false);
    }
  }, [props.isAuth]);

  const getData = () => {
    axios
      .get("/favorite")
      .then(({ data }) => setWishList(data.data.movies))
      .catch((error) => console.log(error));
  };

  return (
    <Row>
      {props.movies.map((movie, index) => {
        const i = wishList.findIndex((item) => item.imdbID === movie.imdbID);
        const isInList = i === -1 ? false : true;
        return (
          <MovieThumbnail
            key={index}
            getData={getData}
            isInList={isInList}
            movie={movie}
            showButton={showButton}
            turnOffCommenting={props.turnOffCommenting}
          />
        );
      })}
    </Row>
  );
};

export default MovieList;
