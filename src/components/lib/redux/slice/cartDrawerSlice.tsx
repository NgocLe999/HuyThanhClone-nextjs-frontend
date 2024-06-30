import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AnyNsRecord } from "dns";
import { callFetchProductDetails } from "~/utils/api";

// First, create the thunk
export const fetchProductAddCart = createAsyncThunk(
  "product/fetchProductAddCart", // action.type
  async (productId: string) => {
    const response = await callFetchProductDetails(productId);
    return response ?? [];
  }
);
interface IState {
  isFetching: boolean;
  isOpenCart: boolean;
  data: IProduct[];
}
const initialState: IState = {
  isFetching: true,
  isOpenCart: false,
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
      console.log("check action.payload", action.payload);
      const productRemaning = state.data.filter(
        (product) => product._id !== action.payload
      );
      state.data = productRemaning;
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
        state.isOpenCart = true;
        state.isFetching = false;

        const isExist = state.data.findIndex(
          //@ts-ignore
          (item) => item._id === action.payload._id
        );
        if (isExist !== -1) {
          return;
        } else {
          //@ts-ignore
          state.data.push(action.payload);
        }
      }
      22;
    });
  },
});

export const { setShowCart, deleteProductCart } = cartDrawerSlice.actions;

export default cartDrawerSlice.reducer;
