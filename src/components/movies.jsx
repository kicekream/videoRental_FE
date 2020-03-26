import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/like";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    genres: getGenres()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  //handles the movie like and unlike
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleGenre = genre => {
    const catGenre = [...this.state.movies];
    const newGenre = catGenre.filter(
      category => genre.name === category.genre.name
    );
    console.log(newGenre);
  };

  handlePageChange = page => {
    console.log(page)
  }

  render() {
    const { length: count } = this.state.movies;
    if (count < 1) return <p>There are no movies listed</p>;
    return (
      <React.Fragment>
        <p>Number of Movies: {count}</p>

        <span className="Spandex">
          <table className="table table-hover table-dark">
            <tbody>
              <tr>
                <td>All Genres</td>
              </tr>
              {this.state.genres.map(genre => (
                <tr key={genre._id} onClick={() => this.handleGenre(genre)}>
                  <td>{genre.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </span>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                  {/* <button className="btn btn-outline-danger">
                </button> */}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(movie)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
