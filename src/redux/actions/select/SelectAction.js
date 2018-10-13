
import {
    SELECT_LIST
  } from '../types';
  
  export const selectLibrary = (libraryId) => {
    return {
      type: SELECT_LIST,
      payload: libraryId
    };
  };
  