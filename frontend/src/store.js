import {  combineReducers,createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productDetailsReducer, productReducer } from "./reducres/productReducer";
import { configureStore } from '@reduxjs/toolkit'
import { ProfileReducer, forgotPasswordReducer, userReducer } from "./reducres/userReducer";
import { cartReducer } from "./reducres/cartReducer";
import { newOrderReducer } from "./reducres/orderReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user:userReducer,
  profile:ProfileReducer,
  forgotPassword:forgotPasswordReducer,
  cart:cartReducer,
  newOrder:newOrderReducer
});


// let initialState = () => ({
//   cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
// });

// const [cart, setCart] = useState(initialState());

// useEffect(() => {
//   localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
// }, [cart.cartItems]);


let initialState = {
  cart: {


    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middleware = [thunk];


//Never use configure store if you want to live more #####
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;