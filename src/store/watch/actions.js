import { Dispatch } from 'redux';
import axios from 'axios';

import { API_URI, API_KEY } from '@env';
import { ACTION_TYPES } from 'Store/actionTypes';

export const getMyteams = () => {
  return async dispatch => {
    const result = await axios.get(`${API_URI}teamdata?apikey=${API_KEY}`);
    dispatch({ type: ACTION_TYPES.WATCH.GET_MY_TEAMS, payload: result.data });
  };
};
