import axios from "axios";
import {
REGISTER_USER,
LOGIN_USER,
LOAD_USER,USER_FAIL
} from '../Canstants/UserConstants'
const initialState = {
    errors: [],
    user: {},
    data:[],
    isAuthUser: false,
    loadUser: false
}
const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOAD_USER:
        return { ...state, loadUser: true };
      case REGISTER_USER:
      case LOGIN_USER:
        localStorage.setItem("userToken", payload.userToken);
        return {
          ...state,
          loadUser: false,
          isAuthUser: true,
          user: payload.user,
        };
      case USER_FAIL:
        return {
          ...state,
          loadUser: false,
          isAuthUser: false,
          errors: payload,
        };
    //   case LOGOUT_USER:
    //     localStorage.removeItem("studentToken");
    //     return {
    //       ...state,
    //       student: {},
    //       errors: [],
    //       loadUser: false,
    //       isAuthUser: false,
    //     };
      default:
        return state;
    }
  };
  
  export default UserReducer;