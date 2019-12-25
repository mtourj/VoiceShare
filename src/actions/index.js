import axiosWithAuth from "../utils/axiosWithAuth";

export const SET_TOKEN = "SET_TOKEN";

export const SET_USER = "SET_USER";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

// This function will recieve a user object from
// auth0 when login/registration is complete.
export const login = user => dispatch => {
  // Dispatch begin login
  dispatch({ type: LOGIN_START });
  // Check database for this user
  return axiosWithAuth()
    .post(`${process.env.DATABASE_URL}/users/login`, user)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });
  // User exists? Great, log in

  // User does not exist? Great, let's have them fill out a form to sign up
};

// This function will set the current logged in user
// in redux state. This will make it easy for us to
// utilize user info
export const setUser = user => dispatch => {
  // Dispatch set user and user payload
  dispatch({ type: SET_USER, payload: user });
};

export const setToken = token => dispatch => {
  dispatch({ type: SET_TOKEN, payload: token });
};
