import { Button, Col, Input, Modal } from "antd";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const MovieThumbnail = ({
  movie,
  showButton,
  isInList,
  getData,
  turnOffCommenting,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [commentsArray, setCommentsArray] = useState([]);

  useEffect(() => {
    if (!turnOffCommenting && showComments) {
      axios
        .get(`/movie/${movie._id}/comment`)
        .then(({ data }) => setCommentsArray(data.data.comments))
        .catch((error) => console.log(error));
    }
  }, [showComments, turnOffCommenting, movie]);

  const addIntoList = (movie) => {
    axios
      .post("/favorite", {
        poster: movie.Poster,
        title: movie.Title,
        type: movie.Type,
        year: movie.Year,
        imdbID: movie.imdbID,
        movieId: movie._id,
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

  const handleOnComment = () => {
    axios
      .post("/movie/comment", {
        comment,
        movieId: movie._id,
      })
      .then(({ data }) => {
        setCommentsArray([data.data.comment, ...commentsArray]);
        setShowComments(false);
        setComment("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Col span={4}>
      <div className="movie-poster">
        <img
          src={movie.Poster}
          alt="movie"
          style={{ cursor: "pointer" }}
          onClick={() => (!turnOffCommenting ? setShowComments(true) : null)}
        />
        <div className="movie__details">
          <h2>{movie.Title}</h2>

          <div className="movie__details-bottom">
            <small>{movie.Year}</small>
            {showButton && !turnOffCommenting && (
              <Button
                type="primary"
                onClick={() =>
                  isInList ? removeFromList(movie) : addIntoList(movie)
                }
              >
                {isInList ? "Remove" : "Add"}
              </Button>
            )}
          </div>
        </div>
      </div>
      <Modal
        title={movie.Title}
        visible={showComments}
        footer={null}
        onOk={() => setShowComments(false)}
        onCancel={() => setShowComments(false)}
      >
        {commentsArray.map((comment) => (
          <div className="comment">
            <h4>{comment.userId.name}</h4>
            <p>{comment.body}</p>
          </div>
        ))}

        {loading && <Loader />}

        {commentsArray.length === 0 && !loading && <div>No comments found</div>}

        {showButton && (
          <div className="modal__footer">
            <Input.TextArea
              showCount
              maxLength={100}
              value={comment}
              placeholder="Enter your comment..."
              onChange={(e) => setComment(e.target.value)}
            />

            <Button
              type="primary"
              className="modal__footer-button"
              onClick={handleOnComment}
            >
              Comment
            </Button>
          </div>
        )}
      </Modal>
    </Col>
  );
};

export default MovieThumbnail;
