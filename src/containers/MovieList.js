import React, { Component } from 'react';
import Movie from '../components/Movie';
import { connect } from 'react-redux';
import axios from 'axios';
// import PropTypes from 'prop-types';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    axios.get('http://www.omdbapi.com/?apikey=1f69237e&s=Batman')
    .then(result =>{
      console.log(result.data.Search)
      console.log('inside componentDidMount')
      console.log(this.state)
      this.setState({
        movies: result.data.Search,
      })
    }).catch(console.log('wtvr'))
  }

  render() {
    const { movies } = this.state;
    console.log('movies is empty?')
    console.log(movies)
    return(
      <div className="grid-container">
        <h5>Movie List rendering</h5>
        <div className="movie-container">
          {
            movies.map((movie)=>{
              return(
                <Movie key={movie.imdbID} movie={movie}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(MovieList);