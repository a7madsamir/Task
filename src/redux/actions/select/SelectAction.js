
import {
    SELECT_LIST
  } from '../types';
  
  export const selectList = (listId) => {
    return {
      type: SELECT_LIST,
      payload: listId
    };
  };
  