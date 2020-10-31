import React, { Component } from 'react';
import Movie from '../components/Movie';
import { connect } from 'react-redux';
import axios from 'axios';
import CategoryFilter from '../components/CategoryFilter';
// import InputFilter from '../components/InputFilter';
import { changeFilter } from '../actions/index';
// import PropTypes from 'prop-types';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // movies: [],
      movies: this.props.movies,
      input:'',
    }
    this.handleFilterChange = this.handleFilterChange.bind(this)
/*     this.handleQueryChange = this.handleQueryChange.bind(this) */
    this.showMovie = this.showMovie.bind(this)
    this.submitQuery = this.submitQuery.bind(this)
  }

  handleFilterChange(filter) {
/*     console.log('entered change filter')
    console.log(filter) */
    this.props.changeFilter(filter)
  }

  showMovie(movie) {
    // console.log('inside showMovie')
    const {filter} = this.props
    // console.log(filter)
    // console.log(movie.Type)
    if(filter === 'all'){
      return true;
    }
    if(filter ===  movie.Type){
      return true;
    }
    return false
  }

  handleQueryChange = e => {
    this.setState({
      input: e.target.value,
    })
  };


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
/* 
  componentDidUpdate(prevProps, prevState) {
    const query = this.state.input

    if (prevState.input !== query) {
      axios.get(`http://www.omdbapi.com/?apikey=1f69237e&s=joker`)
      .then(result =>{
        this.setState({
          movies: result.data.Search,
        })
      }).catch(console.log('wtvr2'))
    }
  } */

  submitQuery() {
    const currentQuery = this.state.input;

    axios.get(`http://www.omdbapi.com/?apikey=1f69237e&s=${currentQuery}`)
    .then(result =>{
      this.setState({
        input: '',
        movies: result.data.Search,
      })
    }).catch(console.log('wtvr'))
  }

  render() {
    const { movies } = this.state;
    //console.log('movies is empty?')
    //console.log(movies)
    return(
      <div className="grid-container">
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" value={this.state.input} onChange={this.handleQueryChange}></input>
          <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.submitQuery}>Submit</button>
        </form>
        {/* <InputFilter change={this.handleQueryChange}/> */}
        <CategoryFilter change={this.handleFilterChange}/>
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
/*   query: state.query, */
});

const mapDispatchToProps = dispatch => ({
  changeFilter: (filter)=>{
    dispatch(changeFilter(filter));
  },

/*   changeQueryFilter: (query)=>{
    dispatch(queryFilter(query));
  }, */
});


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);