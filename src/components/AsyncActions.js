import React from "react";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

const AsyncActions = () => {
  const initialState = {
    loading: false,
    users: [],
    error: "",
  };

  const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
  const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
  const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

  const fetchUserRequest = () => ({
    type: FETCH_USERS_REQUEST,
  });

  const fetchUserSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users,
  });

  const fetchUserFailure = (error) => ({
    type: FETCH_USERS_FAILURE,
    payload: error,
  });

  const reducer = (state = initialState, action) => {
    if (action.type === FETCH_USERS_REQUEST) {
      return {
        ...state,
        loading: true,
      };
    } else if (action.type === FETCH_USERS_SUCCESS) {
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    } else if (action.type === FETCH_USERS_FAILURE) {
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    } else {
      return state;
    }
  };

  const fetchUsers = () => {
    return function (dispatch) {
      dispatch(fetchUserRequest());
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          const users = response.data.map((user) => user.id);
          dispatch(fetchUserSuccess(users));
        })
        .catch((error) => {
          dispatch(fetchUserFailure(error.message));
        });
    };
  };

  const store = createStore(reducer, applyMiddleware(thunk, logger));
  store.subscribe(() => {
    console.log(store.getState());
  });
  store.dispatch(fetchUsers);

  return <div></div>;
};

export default AsyncActions;
