import {
  SELECT_LIST
} from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_LIST:
      return action.payload;
    default:
      return state;
  }
};
