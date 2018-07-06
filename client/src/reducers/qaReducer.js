import {
  ADD_QA,
  GET_QA,
  GET_QAS,
  QA_LOADING,
  GET_CATEGORIES
} from "../actions/types";

const initialState = {
  qas: [],
  qa: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_QA:
      return {
        ...state,
        qas: [action.payload, ...state.qas]
      };
    case GET_QA:
      return {
        ...state,
        qa: action.payload
      };
    case GET_QAS:
      return {
        ...state,
        qas: action.payload
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case QA_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
