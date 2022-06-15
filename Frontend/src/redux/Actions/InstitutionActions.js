import {
    LOAD_INSTITUTION ,
    FAIL_INSTITUTION ,
    GET_INSTITUTION ,
    GET_ONE_INSTITUTION,
  } from "../Canstants/InstitutionCanstants";
  import axios from 'axios'
export const allInstitutions = () => async (dispatch) => {
    dispatch({
      type: LOAD_INSTITUTION,
    });
    try {
      let res = await axios.get("http://localhost:8080/api/institutions/");
      dispatch({
        type: GET_INSTITUTION,
        payload: res.data, 
      });
    } catch  {
      // const { errors } = error.res.data;
      dispatch({
        type: FAIL_INSTITUTION,
        // payload: errors,
      });
    }
  };

  export const getInstitution = (id) => async (dispatch) => {
    try {
      let res = await axios.get(`http://localhost:8080/api/institutions${id}`);
      dispatch({
        type: GET_ONE_INSTITUTION,
        payload: res.data, 
      });
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: FAIL_INSTITUTION,
        payload: errors,
      });
    }
  };