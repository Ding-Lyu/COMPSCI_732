import { Button } from "antd";
import axios from "axios";
import React, { Component } from "react";

export default class WatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  removeItem = (movie) => {
    axios
      .delete("/favorite/" + movie._id)
      .then(({ data }) => this.getData())
      .catch((error) => console.log(error));
  };

  getData = () => {
    axios
      .get("/favorite")
      .then(({ data }) => this.setState({ movies: data.data.movies }))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <h1>Your Watch List</h1>
        <div style={{ display: "flex" }}>
          {this.state.movies.map((movie) => (
            <div className="watch-list-item">
              <img src={movie.poster} alt="movie"></img>
              <Button onClick={() => this.removeItem(movie)} type="primary">
                Remove
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
