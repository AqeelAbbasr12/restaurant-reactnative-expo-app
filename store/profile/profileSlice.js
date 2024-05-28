import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { Api } from "@/utils/utils";

const fetchProfileData = async (token) => {
  const res = await fetch(`${Api.route}/api/users/currentUser/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });
  return res
}
const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const profileSlice = createSliceWithThunks({
  name: 'order',
  initialState: {
    loading: false,
    error: null,
    profileData: [],
  },

  reducers: (create) => ({
    fetchProfile: create.asyncThunk(
      async (data) => {
        const res = await fetchProfileData(data);
        if (res.status === 200) {
          const jsonData = await res.json();
          return jsonData;
        }

        return null;

      },
      {
        pending: (state) => {
          state.loading = true
        },
        rejected: (state, action) => {
          state.error = action.payload ?? action.error
        },
        fulfilled: (state, action) => {
          state.profileData = action.payload;
        },
        settled: (state, action) => {
          state.loading = false
        }
      }
    ),
    updateProfile: create.asyncThunk(
      async (data) => {
        const res = await fetch(`${Api.route}/api/users/currentUser/profile`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.token}`
          },
          body: JSON.stringify(data.profileData),
        });
        if (res.status === 200) {
          const jsonData = await res.json();
          return jsonData;
        }
        return null;
      },
      {
        pending: (state) => {
          state.loading = true
        },
        rejected: (state, action) => {
          state.error = action.payload ?? action.error
        },
        fulfilled: (state, action) => {
          state.profileData = action.payload;
        },
        settled: (state, action) => {
          state.loading = false
        }
      }
    ),
    deleteProfileAccount: create.asyncThunk(
      async (data) => {
        const res = await fetch(`${Api.route}/api/users/currentUser/profile`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data}`
          },
        });
        if (res.status === 200) {
          const jsonData = await res.json();
          return jsonData;
        }
        return null;
      },
      {
        pending: (state) => {
          state.loading = true
        },
        rejected: (state, action) => {
          state.error = action.payload ?? action.error
        },
        fulfilled: (state, action) => {
          state.orderDetail = action.payload;
          state.cartData = [];
        },
        settled: (state, action) => {
          state.loading = false
        }
      }
    ),
  }),
});
export const { fetchProfile, updateProfile, deleteProfileAccount } = profileSlice.actions;
export default profileSlice.reducer;
