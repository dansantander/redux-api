import React, { Component } from 'react';
import Movie from '../components/Movie';
import { connect } from 'react-redux';
import axios from 'axios';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter } from '../actions/index';
// import PropTypes from 'prop-types';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.showMovie = this.showMovie.bind(this)
  }

  handleFilterChange(filter) {
/*     console.log('entered change filter')
    console.log(filter) */
    this.props.changeFilter(filter)
  }

  showMovie(movie) {
    console.log('inside showMovie')
    const {filter} = this.props
    console.log(filter)
    console.log(movie.Type)
    if(filter === 'all'){
      return true;
    }
    if(filter ===  movie.Type){
      return true;
    }
    return false
  }

  componentDidMount(){
    axios.get('http://www.omdbapi.com/?apikey=1f69237e&s=Batman')
    .then(result =>{
/*       console.log(result.data.Search)
      console.log('inside componentDidMount')
      console.log(this.state) */
      this.setState({
        movies: result.data.Search,
      })
    }).catch(console.log('wtvr'))
  }

  render() {
    const { movies } = this.state;
/*     console.log('movies is empty?') */
    console.log(movies)
    return(
      <div className="grid-container">
        <CategoryFilter change={this.handleFilterChange}/>
        <h5>Movie List rendering</h5>
        <div className="movie-container">
          {
            movies.filter((movie)=>(this.showMovie(movie))).map((movie)=>{
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
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: (filter)=>{
    dispatch(changeFilter(filter));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);