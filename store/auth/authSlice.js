import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: true,
    },
    reducers: {
        setAuthStatus: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setAuthStatus } = authSlice.actions;
export default authSlice.reducer;
