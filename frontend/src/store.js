import {  combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productDetailsReducer, productReducer } from "./reducres/productReducer";
import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from "./reducres/userReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user:userReducer
});

let initialState = {};

const middleware = [thunk];

const store = configureStore(
  {reducer},
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store