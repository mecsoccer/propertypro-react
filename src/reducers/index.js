import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import propertyReducer from './propertyReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  properties: propertyReducer
});
