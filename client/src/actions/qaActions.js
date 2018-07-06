import axios from "axios";
import {
  ADD_QA,
  GET_ERRORS,
  CLEAR_ERRORS,
  QA_LOADING,
  GET_QAS,
  GET_QA
} from "./types";

// Add QA
export const addQA = qaData => dispatch => {
  dispatch(clearErrors());

  axios
    .post("/api/qa", qaData)
    .then(res =>
      dispatch({
        type: ADD_QA,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get qas
export const getQAs = () => dispatch => {
  dispatch(setQALoading());

  axios
    .get("/api/qa")
    .then(res =>
      dispatch({
        type: GET_QAS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_QAS,
        payload: null
      })
    );
};

// Get Q/A's by category
export const getQAsByCategory = category => dispatch => {
  dispatch(setQALoading());

  axios
    .get(`/api/qa/category/${category}`)
    .then(res =>
      dispatch({
        type: GET_QAS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_QAS,
        payload: null
      })
    );
};

// Get qa
export const getQA = id => dispatch => {
  dispatch(setQALoading);

  axios
    .get(`/api/qa/${id}`)
    .then(res =>
      dispatch({
        type: GET_QA,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_QA,
        payload: null
      })
    );
};

// Add Answer
export const addAnswer = (qaId, answerData) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/qa/answer/${qaId}`, answerData)
    .then(res =>
      dispatch({
        type: GET_QA,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Clear Errors
const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

// Set qa Loading
const setQALoading = () => {
  return {
    type: QA_LOADING
  };
};
