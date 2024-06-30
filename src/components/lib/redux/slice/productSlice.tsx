import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { callFetchProductDetails } from "~/utils/api";

// First, create the thunk
export const fetchProductById = createAsyncThunk(
  "product/fetchProductById", // action.type
  async (productId: string) => {
    const response = await callFetchProductDetails(productId);
    return response ?? [];
  }
);
interface IState {
  isFetching: boolean;
  isOpen: boolean;
  isOpenCart: boolean;
  data: IProduct;
}
const initialState = {
  isFetching: true,
  isOpen: false,
  data: {},
};

// Then, handle actions in your reducers:
const cartDrawerSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setShowProduct: (state, action) => {
      state.isOpen = action.payload;
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchProductById.pending, (state, action) => {
      state.isFetching = true;
    });

    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.isFetching = false;
    });

    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      if (action && action.payload) {
        state.isOpen = true;
        state.isFetching = false;
        state.data = action.payload;
      }
    });
  },
});

export const { setShowProduct } = cartDrawerSlice.actions;

export default cartDrawerSlice.reducer;
