import { useState } from 'react';
import {login} from "../services/User/UserService";
import {useDispatch} from "react-redux";

export function useLogin() {
 const dispatch = useDispatch()
 const [isLoading, setLoading] = useState(false)

 const loginUser = async (username, password) => {
     if (!username || !password) return;

     setLoading(true)

     await login(dispatch, { username, password });

     setLoading(false)

     return login;
 }

 return [loginUser, isLoading]
}