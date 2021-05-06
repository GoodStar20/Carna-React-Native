import { ACTION_TYPES } from 'Store/actionTypes';

const initialState = {
  myTeams: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.WATCH.GET_MY_TEAMS:
      return { ...state, myTeams: action.payload };
    default:
      return state;
  }
};
