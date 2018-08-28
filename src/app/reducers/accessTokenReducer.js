import {
    GET_ACCESS_TOKEN, GET_ACCESS_TOKEN_ERROR
} from '../actions/types';

const accessTokenReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_ACCESS_TOKEN:
        return { ...state,  ...action.payload };
  
      case GET_ACCESS_TOKEN_ERROR:
        return { ...state, ...action.payload };
  
      
    }
    return state;
  }
  
  export default accessTokenReducer;