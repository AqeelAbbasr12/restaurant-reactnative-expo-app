import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { Api } from "@/utils/utils";

const fetchOrderData = async (token) => {
  const res = await fetch(`${Api.route}/api/orders`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      },
  });
  return res
}

const orderDetailData = async (token, id) => {
  const res = await fetch(`${Api.route}/api/order/${id}`, {
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

const orderSlice = createSliceWithThunks({
    name: 'menu',
    initialState: {
        loading: false,
        error: null,
        orderData: [],
        menuData: [],
        orderDetail: [],
    },
    reducers: (create) => ({
      fetchOrders: create.asyncThunk(
        async (data) => {
          const res = await fetchOrderData(data);
          
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
      fetchOrdersDetail: create.asyncThunk(
        async (data) => {
          const res = await fetch(`${Api.route}/api/orders/${data.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${data.token}`
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
          },
          settled: (state, action) => {
              state.loading = false
          }
        }
      ),
      
    }),
});

export const { fetchOrders, fetchOrdersDetail } = orderSlice.actions;
export default orderSlice.reducer;
