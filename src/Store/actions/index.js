import axios from "axios";
import {
  HANDLE_CHANGE,
  START_LOADING,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} from "../types";

export const handleChange = e => ({
  type: HANDLE_CHANGE,
  payload: e
});

export const getSearchResults = searchTerm => dispatch => {
  dispatch({ type: START_LOADING });

  axios
    .get(`https://images-api.nasa.gov/search?q=${searchTerm}`)
    .then(res =>
      dispatch({ type: SEARCH_SUCCESS, payload: res.data.collection.items })
    )
    .catch(err =>
      dispatch({
        type: SEARCH_ERROR,
        payload: "FAILED TO GET DATA FROM NASA'S API"
      })
    );
};
