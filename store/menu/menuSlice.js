import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { Api } from "@/utils/utils"

const Api_route = process.env.EXPO_PUBLIC_API_URL ?? Api.route;

const fetchMenuData = async () => {
  const res = await fetch(`$Api_route}/api/menu`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res
}
const fetchCategoryData = async () => {
  const res = await fetch(`$Api_route}/api/category`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res
}

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const authSlice = createSliceWithThunks({
  name: 'menu',
  initialState: {
    loading: false,
    error: null,
    catgeoryData: [],
    menuData: [],
    menuDetail: [],
  },
  reducers: (create) => ({
    fetchCategories: create.asyncThunk(
      async () => {
        const res = await fetchCategoryData();

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
          state.catgeoryData = action.payload;
        },
        settled: (state, action) => {
          state.loading = false
        }
      }
    ),
    fetchMenus: create.asyncThunk(
      async () => {
        const res = await fetchMenuData();

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
          state.menuData = action.payload;
        },
        settled: (state, action) => {
          state.loading = false
        }
      }
    ),
    fetchMenuDetail: create.asyncThunk(
      async (data) => {
        const res = await fetch(`$Api_route}/api/menu/${data}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
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
          state.menuDetail = action.payload;
        },
        settled: (state, action) => {
          state.loading = false
        }
      }
    ),

  }),
});

export const { fetchMenus, fetchCategories, fetchMenuDetail } = authSlice.actions;
export default authSlice.reducer;
