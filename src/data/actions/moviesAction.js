import {
  MOVIES_GET_REQUEST,
  MOVIES_GET_SUCCESS,
  MOVIES_GET_FAILURE,
} from "../constants";

import API from "../fetch";

// eslint-disable-next-line import/prefer-default-export
export const fetchMovies = () => async (dispatch) => {
  dispatch({
    type: MOVIES_GET_REQUEST,
  });

  try {
    const response = await API.movies.fetchMovies();
    const data = await response.json();

    dispatch({
      type: MOVIES_GET_SUCCESS,
      payload: data.feed.entry,
    });
  } catch (error) {
    dispatch({
      type: MOVIES_GET_FAILURE,
    });
  }
};