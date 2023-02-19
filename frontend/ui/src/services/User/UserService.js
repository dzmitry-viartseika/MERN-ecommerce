import { loginFailure, loginStart, loginSuccess } from "../../redux/userRedux";
import { publicRequest } from "../RequestMethods";

export const login = async (dispatch, user) => {
    console.log('loginStart')
    dispatch(loginStart());
    try {
        const result = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(result.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};