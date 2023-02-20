import { useState } from 'react';
import { register } from "../services/User/UserService";
import { useDispatch } from "react-redux";

export function useRegister() {
 const dispatch = useDispatch()
 const [isLoading, setLoading] = useState(false)

 const registerUser = async (username, email, password) => {
     if (!email || !password || !username) return;

     setLoading(true)

     await register(dispatch, { username, email, password });

     setLoading(false)

     return register;
 }

 return [registerUser, isLoading]
}