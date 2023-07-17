import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const cart = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, cart);

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: persistedReducer,
  },
});

export default store;
