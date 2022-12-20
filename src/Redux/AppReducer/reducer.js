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

      case types.GET_JOBSDATA_REQUEST:
        return {
          ...oldState,
          isLoading:true,
        }

        case types.GET_JOBSDATA_SUCCESS:
          return {
            ...oldState,
            isLoading:false,
            companies:payload,
          }

          case types.GET_JOBSDATA_FAILURE:
            return {
              ...oldState,
              isLoading:false,
              isError:true,
            }

            case types.GET_SINGLE_JOBDATA_REQUEST:
        return {
          ...oldState,
          isLoading:true,
        }

        case types.GET_SINGLE_JOBDATA_SUCCESS:
          return {
            ...oldState,
            isLoading:false,
            companies:payload,
          }

          case types.GET_SINGLE_JOBDATA_FAILURE:
            return {
              ...oldState,
              isLoading:false,
              isError:true,
            }

    default:
      return oldState;
  }
};
