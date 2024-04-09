import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { Api } from "@/utils/utils"

const Api_route = process.env.EXPO_PUBLIC_API_URL ?? Api.route;

const login = async (data) => {
    const res = await fetch(`${Api_route}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res
}

const refreshToken = async (data) => {
    const res = await fetch(`${Api_route}/refresh`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res
}

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

const authSlice = createSliceWithThunks({
    name: 'auth',
    initialState: {
        loading: false,
        error: null,
        accessToken: null,
        refreshToken: null,
        userLocation: null,
    },
    reducers: (create) => ({
        setUserLocation: create.reducer((state, action) => {
            state.userLocation = action.payload;
        }),
        registerUser: create.asyncThunk(
            async (data) => {
                const res = await fetch(`${Api_route}/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                if (res.status === 200) {
                    const loginRes = await login(data)
                    return {
                        loginInfo: await loginRes.json(),
                        user: data
                    }
                }
                return null
            },
            {
                pending: (state) => {
                    state.loading = true
                },
                rejected: (state, action) => {
                    state.error = action.payload ?? action.error
                },
                fulfilled: (state, action) => {
                    if (action.payload.errors) {
                        state.error = action.payload.errors;
                    } else {
                        state.accessToken = action.payload.loginInfo.accessToken;
                        state.refreshToken = action.payload.loginInfo.refreshToken;
                        state.user = action.payload.user;
                    }
                },
                settled: (state, action) => {
                    state.loading = false
                }
            }
        ),
        loginUser: create.asyncThunk(
            async (data) => {
                const loginRes = await login(data)
                return {
                    loginInfo: await loginRes.json(),
                    user: data
                }
            },
            {
                pending: (state) => {
                    state.loading = true
                },
                rejected: (state, action) => {
                    state.error = action.payload ?? action.error
                },
                fulfilled: (state, action) => {
                    if (action.payload.errors) {
                        state.error = action.payload.errors;
                    } else {
                        state.accessToken = action.payload.loginInfo.accessToken;
                        state.refreshToken = action.payload.loginInfo.refreshToken;
                        state.user = action.payload.user;
                    }
                },
                settled: (state, action) => {
                    state.loading = false
                }
            }
        )

    }),
});

export const { registerUser, setUserLocation, loginUser } = authSlice.actions;
export default authSlice.reducer;
