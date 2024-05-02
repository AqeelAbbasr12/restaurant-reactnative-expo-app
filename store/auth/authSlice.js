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
    const responseJson = await res.json();
    return responseJson
}

const refreshToken = async (data) => {
    const res = await fetch(`${Api_route}/refresh`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data}`
        },
        body: JSON.stringify({ "refreshToken": data }),
    });
    const responseJson = await res.json();
    return responseJson
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
        authScreen: "login",
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
                const responseJson = await res.json();
                console.log("responseJson ", responseJson);
                return await res.json();
            },
            {
                pending: (state) => {
                    state.loading = true
                },
                rejected: (state, action) => {
                    console.log("Rejected")
                    state.error = action.payload ?? action.error
                },
                fulfilled: (state, action) => {
                    console.log("action.payload ===> ", action.payload)
                    if (action.payload.status === 401) {
                        state.error = action.payload.title;
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
                if (loginRes.accessToken) {
                    return {
                        loginInfo: loginRes,
                        user: data
                    }
                }
                else {
                    return {
                        message: "Inavlid email or password",
                        title: loginRes.title,
                        status: loginRes.status
                    };
                }
            },
            {
                pending: (state) => {
                    state.loading = true
                },
                rejected: (state, action) => {
                    state.loading = false
                    state.error = action.payload ?? action.error;
                },
                fulfilled: (state, action) => {
                    state.loading = false
                    if (action.payload.status === 401) {
                        state.error = action.payload.title;
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

        getRefreshToken: create.asyncThunk(
            async (data) => {
                const loginRes = await refreshToken(data);
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
                    state.error = null;
                },
                fulfilled: (state, action) => {
                    if (action.payload.errors) {
                        state.error = action.payload.errors;
                        state.error = null;
                    } else {
                        state.accessToken = action.payload.loginInfo.accessToken;
                        state.refreshToken = action.payload.loginInfo.refreshToken;
                    }
                },
                settled: (state, action) => {
                    state.loading = false
                }
            }
        ),

        logoutUser(state, action) {
            state.accessToken = null;
            state.refreshToken = null;
            state.userLocation = null;
            state.authScreen = "login";
            state.loading = false;
        },

        switchAuthScreen(state, action) {
            state.authScreen = action.payload;
        },

    }),
});

export const { registerUser, setUserLocation, loginUser, getRefreshToken, logoutUser, switchAuthScreen } = authSlice.actions;
export default authSlice.reducer;
