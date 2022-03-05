import axios from 'axios';
import {BASE_URL} from '../constants';
import {MoviesAction, MoviesDispatchType} from '../../types';
import {GET_MOVIES} from './actions';

export const getMovies = () => {
  return async (dispatch: MoviesDispatchType) => {
    const res = await axios.get(`${BASE_URL}`);
    let data: MoviesAction = {
      type: GET_MOVIES,
      movies: {
        data: [],
      },
    };

    if (res.data) {
      data.movies.data = res.data;
      dispatch(data);
    } else {
      dispatch(data);
    }
  };
};
