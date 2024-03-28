import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { Api } from "@/utils/utils"

const fetchOrderData = async () => {
  const res = await fetch(`${Api.route}/api/orders`, {
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

const orderSlice = createSliceWithThunks({
    name: 'menu',
    initialState: {
        loading: false,
        error: null,
        orderData: [],
        menuData: [],
        menuDetail: [],
    },
    reducers: (create) => ({
      fetchOrders: create.asyncThunk(
        async () => {
          const res = await fetchOrderData();
          
          console.log('res', res);
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
            state.orderData = action.payload;
          },
          settled: (state, action) => {
              state.loading = false
          }
        }
      ),
      fetchMenuDetail: create.asyncThunk(
        async (data) => {
          const res = await fetch(`${Api.route}/api/menu/${data}`, {
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

export const { fetchOrders, fetchMenuDetail } = orderSlice.actions;
export default orderSlice.reducer;
