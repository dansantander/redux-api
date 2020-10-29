import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'
import 'bootstrap/dist/css/bootstrap.min.css';

const defaultState = {
  movies: [
    {
      imdbID: 'tt0372784',
      title: 'Batman Begins',
      year: '2005',
      type: 'movie',
      poster:'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    },
    {
      imdbID: 'tt0103359',
      title: 'Batman: The Animated Series',
      year: '1992–1995',
      type: 'series',
      poster:'https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg',
    },
    {
      imdbID: "tt1568322",
      title: "Batman: Arkham City",
      year: "2011",
      type: "game",
      poster:"https://m.media-amazon.com/images/M/MV5BZDE2ZDFhMDAtMDAzZC00ZmY3LThlMTItMGFjMzRlYzExOGE1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    }
  ]
}

const store = createStore(
  rootReducer,
  { movies: defaultState.movies }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

