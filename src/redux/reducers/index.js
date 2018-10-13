import { combineReducers } from 'redux';
import DataReducer from './DataReducer';
import SelectionReducer from './SelectionReducer';


export default combineReducers({
  libraries: DataReducer,
  selectedListId: SelectionReducer,
});
