import { combineReducers } from 'redux';

// reducers
import toggle from 'store/reducers/toggle.reducer';
import auth from 'store/reducers/auth.reducer';

export default combineReducers({
  auth,
  toggle
});