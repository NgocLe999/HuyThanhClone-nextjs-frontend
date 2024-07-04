import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AnyNsRecord } from "dns";
import { callFetchProductDetails } from "~/utils/api";
import { produce } from "immer";
import { dark } from "@mui/material/styles/createPalette";
import { Satellite } from "@mui/icons-material";
// First, create the thunk
export const fetchProductAddCart = createAsyncThunk(
  "product/fetchProductAddCart", // action.type
  async (productId: string) => {
    const response = await callFetchProductDetails(productId);
    return response ?? [];
  }
);

const initialState: IState = {
  isFetching: true,
  isOpenCart: false,
  totalPay: 0,
  infoOrder: {
    fullName: "",
    address: "",
    phone: "",
    email: "",
    note: "",
  },
  note: "",
  data: [],
};

// Then, handle actions in your reducers:
const cartDrawerSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setShowCart: (state, action) => {
      state.isOpenCart = action.payload;
    },

    deleteProductCart: (state, action) => {
      const productRemaning = state.data.filter(
        (product) => product._id !== action.payload
      );
      state.data = productRemaning;
    },

    increaseProduct: (state, action) => {
      const indexProduct = state.data.findIndex(
        (product) => product._id === action.payload
      );
      if (indexProduct !== -1) {
        state.data[indexProduct].sole_quantity =
          state.data[indexProduct].sole_quantity + 1;
      }
      const total = state.data.reduce(
        (acc, currentValue) =>
          acc + currentValue.price * currentValue.sole_quantity,
        0
      );
      state.totalPay = total;
    },
    decreaseProduct: (state, action) => {
      const indexProduct = state.data.findIndex(
        (product) => product._id === action.payload
      );
      if (indexProduct !== -1) {
        if (state.data[indexProduct].sole_quantity !== 0) {
          state.data[indexProduct].sole_quantity =
            state.data[indexProduct].sole_quantity - 1;
        } else state.data[indexProduct].sole_quantity = 0;
      }
      const total = state.data.reduce(
        (acc, currentValue) =>
          acc + currentValue.price * currentValue.sole_quantity,
        0
      );
      state.totalPay = total;
    },
    noteOrder: (state, action) => {
      state.note = action.payload;
    },
    checkoutOrder: (state, action) => {
      state.infoOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchProductAddCart.pending, (state, action) => {
      state.isFetching = true;
    });

    builder.addCase(fetchProductAddCart.rejected, (state, action) => {
      state.isFetching = false;
    });

    builder.addCase(fetchProductAddCart.fulfilled, (state, action) => {
      if (action && action.payload) {
        //@ts-ignore
        state.totalPay = state.totalPay + action.payload.price;
        //reset_quantity: Lỗi backend
        const payload = produce(action.payload, (draft: IProduct) => {
          draft.sole_quantity = 1;
        });

        state.isOpenCart = true;
        state.isFetching = false;

        const isExist = state.data.findIndex(
          //@ts-ignore
          (item) => item._id === payload._id
        );
        if (isExist !== -1) {
          return;
        } else {
          //@ts-ignore
          state.data.push(payload);
        }
      }
    });
  },
});

export const {
  setShowCart,
  deleteProductCart,
  increaseProduct,
  decreaseProduct,
  noteOrder,
  checkoutOrder,
} = cartDrawerSlice.actions;

export default cartDrawerSlice.reducer;
