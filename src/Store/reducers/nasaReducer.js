import {
  HANDLE_CHANGE,
  START_LOADING,
  SEARCH_ERROR,
  SEARCH_SUCCESS
} from "../types/index";

const initialState = {
  isLoading: false,
  searchField: "",
  data: [],
  error: []
};

const nasaReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      };

    case START_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case SEARCH_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        searchField: ""
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        searchField: ""
      };
    default:
      return state;
  }
};

export default nasaReducer;
