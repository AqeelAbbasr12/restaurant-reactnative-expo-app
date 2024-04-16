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

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const orderSlice = createSliceWithThunks({
  name: 'order',
  initialState: {
    loading: false,
    error: null,
    orderData: [],
    menuData: [],
    orderDetail: [],
    cartData: [],
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

    addTocart(state, action) {
      if (!Array.isArray(state.cartData)) {
        state.cartData = [];
      }
      state.cartData = [...state.cartData, action.payload];
    },
    removeCartItem(state, action) {
      state.cartData = state.cartData.filter(item => item.id !== action.payload);
    },

    emptyCartItems(state, action) {
      state.cartData = [];
    },

    updateCartItemQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const itemIndex = state.cartData.findIndex(item => item.id === productId);
      if (itemIndex !== -1) {
        state.cartData[itemIndex].quantity = quantity;
      }
    },

    placeOrder: create.asyncThunk(
      async (data) => {
        const res = await fetch(`${Api.route}/api/orders`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.token}`
          },
          body: JSON.stringify(data.orderData),
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

export const { fetchOrders, fetchOrdersDetail, addTocart, removeCartItem, emptyCartItems, updateCartItemQuantity, placeOrder } = orderSlice.actions;
export default orderSlice.reducer;
