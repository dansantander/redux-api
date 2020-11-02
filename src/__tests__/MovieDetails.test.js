import '@testing-library/jest-dom';

import { render as rtlRender, screen } from '@testing-library/react';
import React from 'react';
import {
  HashRouter as Router, Route,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import rootReducer from '../reducers';
import MovieDetails from '../components/MovieDetails';

const initialStateBase = {
  movies: [],
  filter: 'all',
  details: {
    Title: 'Batman Begins',
    Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
    Plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.',
    Director: 'Christopher Nolan',
    Rated: 'PG-13',
    Type: 'movie',
    Released: '15 Jun 2005',
    Runtime: '140 min',
    Genre: 'Action, Adventure',
    imdbRating: '8.2',
  },
};

const storeBase = createStore(rootReducer, initialStateBase);
const path = '/movie/tt0372784';
const route = '/pokemon/1';
const history = createMemoryHistory({ initialEntries: [route] });
function render(
  ui,
  {
    initialState = initialStateBase,
    store = storeBase,
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router history={history}>
            {' '}
          <Route path={path}>
            {children}
          </Route>
        </Router>
        {' '}
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

test('test if movie name is loaded when MovieDetails is rendered', () => {
  render(<MovieDetails />);
  expect(screen.getByTestId('Title')).toBeDefined();
});