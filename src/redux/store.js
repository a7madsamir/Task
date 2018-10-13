import {createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import {AsyncStorage} from 'react-native';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

const config = {
    key: 'root',
    storage :AsyncStorage,
  };

const reducer = persistReducer(config, reducers);
const store = createStore( reducer, {} , applyMiddleware(ReduxThunk,logger));
const persistor = persistStore(store).purge();

export  default { store, persistor };





