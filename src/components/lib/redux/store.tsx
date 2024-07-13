import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import cartDrawerReducer from "./slice/cartDrawerSlice";


export const makeStore = () => {
  return configureStore({
    reducer: {
      product: productReducer,
      cart: cartDrawerReducer,
      // filter: filterReducer,
    },
  });
};
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
