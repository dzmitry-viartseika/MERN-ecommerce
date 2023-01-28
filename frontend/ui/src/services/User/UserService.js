import { loginFailure, loginStart, loginSuccess } from "../../redux/userRedux";
import { publicRequest } from "../RequestMethods";

export const login = async (dispatch, user) => {
    console.log('user', user)
    dispatch(loginStart());
    try {
        const result = await publicRequest.post("/auth/login", user);
        console.log('result', result.data)
        dispatch(loginSuccess(result.data));
    } catch (err) {
        console.log('weee')
        dispatch(loginFailure());
    }
};