import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        errorMessage: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            console.log('loginFailure')
            state.isFetching = false;
            state.errorMessage = true;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;