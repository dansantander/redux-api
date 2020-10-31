import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Movie =({ movie })=> {

  return(
    <Link to={`/movie/${movie.imdbID}`} id="link-movie" data-testid="movie_card">
      <div className="card movie">
        <img alt="" className="card-img-top" src={movie.Poster}/>
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
          <p className="card-text">{movie.Type}</p>
        </div>
      </div>
    </Link>
  );
}

export default withRouter(Movie);