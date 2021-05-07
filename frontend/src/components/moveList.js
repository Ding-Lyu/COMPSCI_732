import { React, Component, useState } from "react";
import { Spin, Alert } from "antd";
import fetchJASONP from "fetch-jsonp";

import TestMovieList from "./TestMovieList";

const TestMovie = () => {
  const [movies, setMovies] = useState([
    {
      Title: "Star Wars: Episode IV - A New Hope",
      Year: "1977",
      imdbID: "tt0076759",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode V - The Empire Strikes Back",
      Year: "1980",
      imdbID: "tt0080684",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VI - Return of the Jedi",
      Year: "1983",
      imdbID: "tt0086190",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
  ]);
  return (
    <div>
      <TestMovieList movies={movies}></TestMovieList>
    </div>
  );
};

export default TestMovie;

// export default class movieList extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             movies:[],
//             // nowPages: parseInt(props.match.params.page) || 1,
//             nowPages: 1,
//             pageSize: 10,
//             total: 0,
//             isloading:true
//         }
//     }
//     componentWillMount(){
//         this.loadMovie()
//     }

//     render(){
//         return(
//             <div>
//                 {this.renderList()}
//             </div>
//         )
//     }
// loadMovie = ()=>{

//     // fetchJASONP('http://www.omdbapi.com/?s=star wars&apikey=ebe923f6')
//     // .then(response => response.json())
//     // .then(data => {
//     //     console.log(data)
//     //         this.setState({
//     //         isloading:false,
//     //         // movies:data.subjects,
//     //         // total:data.total
//     //         total:data. totalResults,
//     //         movies: data.subjects
//     //     })
//     //     console.log(this.state. totalResults)
//     // })
// }
// renderList = ()=>{
//     if(this.state.isloading){
//         return <Spin tip="Loading...">
//         <Alert
//           message="Alert message title"
//           description="Further details about the context of this alert."
//           type="info"
//         />
//       </Spin>
//     }else{
//         return <div>
//             {/* {this.state.movies.map(item =>{
//                 return <div>
//                     <h4>Movie:{item.title}</h4>
//                 </div>
//             })} */}
//             Movie
//         </div>
//     }
// }
// }
