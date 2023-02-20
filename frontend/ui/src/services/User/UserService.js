import { loginSuccess } from "../../redux/userRedux";
import { publicRequest } from "../RequestMethods";

export const login = async (dispatch, user) => {
    try {
        const result = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(result.data));
    } catch (err) {
        console.error(err)
    }
};

export const register = async (dispatch, user) => {
    try {
        console.log('user', user)
        const result = await publicRequest.post('/auth/register', user);
        dispatch(loginSuccess(result.data));
    } catch (err) {
        console.error(err)
    }
};