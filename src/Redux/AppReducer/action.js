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



const getJobsDataRequest = () => {
  return {
    type:types.GET_JOBSDATA_REQUEST,
  }
};


const getJobsDataSuccess = (payload) => {

  return {
    type:types.GET_JOBSDATA_SUCCESS,
    payload
  }
};


const getJobsDataFailure = () => {
  return {
    type:types.GET_JOBSDATA_FAILURE,
  }
};


const getSingleJobDataRequest = () => {
  return {
    type:types.GET_SINGLE_JOBDATA_REQUEST,
  }
};


const getSingleJobDataSuccess = (payload) => {

  return {
    type:types.GET_SINGLE_JOBDATA_SUCCESS ,
    payload
  }
};


const getSingleJobDataFailure = () => {
  return {
    type:types.GET_SINGLE_JOBDATA_FAILURE,
  }
};



const getJobsData = (dispatch) => {

  dispatch(getJobsDataRequest());

  axios.get(`https://fake-api-bytv.onrender.com/api/recommendedjobs`)
  .then((res) => {
    dispatch(getJobsDataSuccess(res.data))
   // console.log(res.data)
  })
  .catch((error) => {
    dispatch(getJobsDataFailure())
    console.log("error", error)
  })
}

const getSingleJobDetails = (id) => (dispatch) => {

  dispatch(getSingleJobDataRequest());

   axios.get(`https://fake-api-bytv.onrender.com/api/recommendedjobs?id=${id}`)
  .then((res) => {
    dispatch(getSingleJobDataSuccess(res.data))
  //  console.log(res.data)
  })
  .catch((error) => {
    dispatch(getSingleJobDataFailure())
    console.log("error", error)
  })
}



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


  export { getJobsData, getSingleJobDetails }


