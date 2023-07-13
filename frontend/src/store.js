import { configureStore } from "@reduxjs/toolkit";
import AllProductReducer from "./reducers/productReducers";

const store = configureStore({
  reducer: {
    productList: AllProductReducer,
  },
});

export default store;
