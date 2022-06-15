import {
    LOAD_INSTITUTION ,
    FAIL_INSTITUTION ,
    GET_INSTITUTION ,
    GET_ONE_INSTITUTION,
  } from "../Canstants/InstitutionCanstants";


  const initialState = {
    errors: [],
    institution: {},
    data:[],
    loadInstitution: false
}

  export const institutionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case LOAD_INSTITUTION:
        return { ...state, loadInstitution: true };
    case GET_INSTITUTION:
        return {
        ...state,
        loadInstitution: false,
        data: payload.data,
        };
    case GET_ONE_INSTITUTION:
      return {
        ...state,
        loadInstitution: false,
        data: payload.data,
        institution: payload.institution,
      };
    case FAIL_INSTITUTION:
            return { ...state, loadInstitution: false, errors: payload };
    default:
    return state;
}
};
