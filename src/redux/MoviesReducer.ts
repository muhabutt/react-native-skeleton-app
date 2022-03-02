import {MoviesAction, MoviesReduxState} from '../../types';
import {GET_MOVIES} from './actions';

const moviesReduxState: MoviesReduxState = {
  data: [],
};

const MoviesReducer = (
  state: MoviesReduxState = moviesReduxState,
  action: MoviesAction,
): MoviesReduxState => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        data: action.movies.data,
      };
    default:
      return state;
  }
};

export default MoviesReducer;
