import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: true,
        location: "HAVE THE LOCATION!",
    },
    reducers: {
        setUserLocation: (state, action) => {
            state.location = action.payload;
        },
    },
});

export const { setUserLocation } = userSlice.actions;
export default userSlice.reducer;
