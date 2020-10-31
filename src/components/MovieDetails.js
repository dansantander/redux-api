import React, { Component} from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state={
      details: this.props.details,
      isLoading: true,
    }
  }

  componentDidMount() {
   const {imdbID} = this.props.match.params;
   console.log('entering component did mount')
    console.log(this.props.match.params.imdbID)
    axios.get(`http://www.omdbapi.com/?apikey=1f69237e&i=${imdbID}`)
    .then(result =>{
      this.setState({
        details: result.data,
        isLoading: false,
      })
    }).catch(console.log('failure'))
  }

  render() {
    const { details, isLoading } = this.state
    console.log('entered render')
    console.log(details)
    return(
      <React.Fragment>
        { !isLoading ? (
          <div className="card movie">
            <img alt="" className="card-img-top" src={details.Poster}/>
            <div className="card-body">
            <h5 className="card-title">{details.Title}</h5>
            <h5 className="card-title">{details.Actors}</h5>
            <p className="card-text">{details.Year}</p>
            <p className="card-text">{details.Type}</p>
          </div>
        </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  details: state.details
});

/* MovieDetails.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    poster: PropTypes.string,
    year: PropTypes.string,
    rated: PropTypes.string,
    released: PropTypes.string,
  })
} */

export default withRouter(connect(mapStateToProps)(MovieDetails));