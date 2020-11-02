import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import Movie from '../components/Movie';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter } from '../actions/index';
// import InputFilter from '../components/InputFilter';

class MovieList extends Component {
  /* eslint-disable */
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      input: '',
      isLoading: true,
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    /* this.handleQueryChange = this.handleQueryChange.bind(this) */
    this.showMovie = this.showMovie.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
  }
  /* eslint-enable */

  componentDidMount() {
    axios.get('http://www.omdbapi.com/?apikey=1f69237e&s=Batman')
      .then(result => {
        /*       console.log(result.data.Search)
      console.log('inside componentDidMount')
      console.log(this.state) */
        this.setState({
          movies: result.data.Search,
          isLoading: false,
        });
      });
    // .catch(console.log('wtvr'));
  }

  handleQueryChange = e => {
    this.setState({
      input: e.target.value,
    });
  };

  handleFilterChange(filter) {
    const { changeFilter } = this.props;
    /* console.log('entered change filter')
    console.log(filter) */
    // this.props.changeFilter(filter);
    changeFilter(filter);
  }

  showMovie(movie) {
    // console.log('inside showMovie')
    const { filter } = this.props;
    // console.log(filter)
    // console.log(movie.Type)
    if (filter === 'all') {
      return true;
    }
    if (filter === movie.Type) {
      return true;
    }
    return false;
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
    const { input } = this.state;

    axios.get(`http://www.omdbapi.com/?apikey=1f69237e&s=${input}`)
      .then(result => {
        this.setState({
          input: '',
          movies: result.data.Search,
        });
      });
    // .catch(console.log('wtvr'));
  }

  render() {
    const { movies, input, isLoading } = this.state;
    // console.log('movies is empty?')
    // console.log(movies)
    return (
      <>
        { !isLoading ? (
          <div className="grid-container">
            <form className="form-inline mt-3">
              <input id="searchBar" className="form-control mr-sm-2" value={input} onChange={this.handleQueryChange} placeholder="Search for movies" />
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.submitQuery} type="button">Submit</button>
            </form>
            {/* <InputFilter change={this.handleQueryChange}/> */}
            <div className="cat-container">
              <CategoryFilter change={this.handleFilterChange} />
            </div>
            <div className="movie-container">
              {
            movies.filter(movie => (this.showMovie(movie))).map(movie => (
              <Movie key={movie.imdbID} movie={movie} />
            ))
          }
            </div>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  filter: state.filter,
/*   query: state.query, */
});

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },

/*   changeQueryFilter: (query)=>{
    dispatch(queryFilter(query));
  }, */
});

MovieList.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
