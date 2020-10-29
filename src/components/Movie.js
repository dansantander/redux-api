import React from 'react';

const movie =({ movie })=> {
  return(
    <div className="card movie">
      <img alt="" className="card-img-top" src={movie.Poster}/>
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
      </div>
    </div>
  );
}

export default movie;