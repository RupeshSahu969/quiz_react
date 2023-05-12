import * as types from "./actionTypes";

const inisivalState = {

  quizdata: [],
  isLoading: false,
  isError: false,
  
};

export const reducer = (state = inisivalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_QUIZ_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_QUIZ_SUCCESS:
      return {
        ...state,
        quizdata: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_QUIZ_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
