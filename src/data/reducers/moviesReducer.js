import {
  LOADING_STATES,
  MOVIES_GET_REQUEST,
  MOVIES_GET_SUCCESS,
  MOVIES_GET_FAILURE,
} from "../constants";

const initialState = {
  loadingState: {},
  movies: [],
};

const movies = (state = initialState, action) => {
  const newLoadingState = { ...state.loadingState };

  switch (action.type) {
    case MOVIES_GET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        },
      };

    case MOVIES_GET_SUCCESS:
      delete newLoadingState.MOVIES_GET_REQUEST;

      return {
        ...state,
        movies: action.payload,
        loadingState: newLoadingState,
      };

    case MOVIES_GET_FAILURE:
      delete newLoadingState.MOVIES_GET_REQUEST;

      return {
        ...state,
        movies: [],
        loadingState: newLoadingState,
      };

    default:
      return state;
  }
};

export default movies;