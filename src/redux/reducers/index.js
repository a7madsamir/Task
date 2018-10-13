import { combineReducers } from 'redux';
import DataReducer from './DataReducer';
import SelectionReducer from './SelectionReducer';


export default combineReducers({
  lists: DataReducer,
  selectedListId: SelectionReducer,
});
