import * as actions from '../actions';

const initialState = {
  // User's authentication token
  token: '',
  // User's information object
  user: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.SET_TOKEN: {
      return {
        ...state,
        token: action.payload
      }
    }
    case actions.SET_USER: {
      return {
        ...state,
        user: action.payload
      }
    }
    default: {
      return state;
    }
  }
}