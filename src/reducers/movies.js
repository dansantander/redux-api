const CREATE_MOVIE = 'CREATE_MOVIE'
const REMOVE_MOVIE = 'REMOVE_MOVIE'

const moviesReducer = (state=[], action) => {
  switch(action.type){
    case CREATE_MOVIE:
      return [...state, action.movie]
    case REMOVE_MOVIE:
      return state.filter(movie => movie.title !== action.movie.title);
    default:
      return state;
  }
}

export default moviesReducer;