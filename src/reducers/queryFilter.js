import { QUERY_FILTER } from '../actions/index';

const queryFilterReducer = (state = '', action) => {
  switch (action.type) {
    case QUERY_FILTER:
      return action.query;
    default:
      return state;
  }
};

export default queryFilterReducer;
