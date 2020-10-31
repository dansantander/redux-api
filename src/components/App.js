import React from 'react';
import MovieList from '../containers/MovieList';
import MovieDetails from './MovieDetails';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/">
            <h1>MovieDB</h1>
          </Link>
        </nav>
        <Switch> 
          <Route exact path="/movie/:imdbID" component={MovieDetails}>
            <MovieDetails />
          </Route>
          <Route exact path="/">
            <MovieList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
