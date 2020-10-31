import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'
import 'bootstrap/dist/css/bootstrap.min.css';

const defaultState = {
  movies: [],
  filter: 'all',
  details: {
    Actors:'',
    Title:'',
    imdbID:'',
  },
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

