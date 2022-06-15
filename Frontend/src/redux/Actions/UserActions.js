import axios from "axios";
import {
REGISTER_USER,
LOGIN_USER,
LOAD_USER,USER_FAIL
} from '../Canstants/UserConstants'


export const registerUser = (newUser, history) => async(dispatch) => {
    dispatch({
        type: LOAD_USER
    })
    try {
        let res = await axios.post('http://localhost:8080/api/users/register', newUser)
        dispatch({
            type: REGISTER_USER,
            payload: res.data //{msg, student, student-token}
        })
        history.push("/")

    } catch (error) {
        const {errors} = error.response.data
        dispatch({
            type: USER_FAIL,
            payload: errors
        })
    }
}
//sign in the student
export const loginUser = (user, history) => async(dispatch) => {
    dispatch({
        type: LOAD_USER
    })
    try {
        let res = await axios.post('http://localhost:8080/api/users/login', user)
        dispatch({
            type: LOGIN_USER,
            payload: res.data
        })
        history.push("/")
    } catch (error) {
        const {errors} = error.response.data
        dispatch({
            type: USER_FAIL,
            payload: errors
        })
    }
}

