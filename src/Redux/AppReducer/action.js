import axios from "axios";
import * as types from "./actionType";

const getCompniesRequest = () => {
  return { type: types.GET_COMPNIES_REQUEST };
};
const getCompniesSuccess = (payload) => {
  return { type: types.GET_COMPNIES_SUCCESS, payload };
};
const getCompniesFailure = () => {
  return { type: types.GET_COMPNIES_FAILURE };
};

export const getCompniesActionFn =
  (queryParams = {}) =>
  (dispatch) => {
    dispatch(getCompniesRequest());
    return axios
      .get("https://fake-api-bytv.onrender.com/api/companies", queryParams)
      .then((res) => {
        return dispatch(getCompniesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getCompniesFailure(err));
      });
  };

const postNewCompanyRequest = () => {
  return { type: types.POST_COMPNIES_REQUEST };
};
const postNewCompanySuccess = (payload) => {
  return { type: types.POST_COMPNIES_SUCCESS, payload };
};
const postNewCompanyFailure = () => {
  return { type: types.POST_COMPNIES_FAILURE };
};

export const postNewCompanyActionFn = (payload) => (dispatch) => {
  dispatch(postNewCompanyRequest());
  return axios
    .post("https://fake-api-bytv.onrender.com/api/companies", payload)
    .then((r) => {
      return dispatch(postNewCompanySuccess(r.data));
    })
    .catch((e) => {
      return dispatch(postNewCompanyFailure(e));
    });
};
