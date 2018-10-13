import { combineReducers } from 'redux';
import accessToken from './accessTokenReducer';


export default combineReducers({
    // all reducers goes here
    token:accessToken
});