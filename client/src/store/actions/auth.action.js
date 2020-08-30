import API from "../api";
import { REGISTER_SUCCESS, REGISTER_FAILED, USER_LOADED, AUTH_ERROR, LOGIN_FAILED, LOGIN_SUCCESS } from "./types.action";
import setAuthToken from "../utilities/setAuthToken";

// register
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await API.post("users", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch({
      type: USER_LOADED
    })
  } catch (err) {
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach(error => console.log(error)); 
    // }
    
    dispatch({
      type: REGISTER_FAILED
    });
  }
};

// login
export const login = (email, password ) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await API.post("auth", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch({
      type: USER_LOADED
    })
  } catch (err) {
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach(error => console.log(error)); 
    // }
    
    dispatch({
      type: LOGIN_FAILED
    });
  }
}

// load user
export const loadUser = () => async dispatch => {
  if(localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await API.get('auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}