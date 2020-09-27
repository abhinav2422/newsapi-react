import { combineReducers } from 'redux';

import homeReducer from './homeReducers';

export default combineReducers({
  home: homeReducer
});
