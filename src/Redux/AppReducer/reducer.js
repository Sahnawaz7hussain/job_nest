import * as types from "./actionType";
const initData = {
  isLoading: false,
  isError: false,
  companies: [],
};
export const reducer = (oldState = initData, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_COMPNIES_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.GET_COMPNIES_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        companies: payload,
      };
    case types.GET_COMPNIES_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        companies: [],
      };
    default:
      return oldState;
  }
};
