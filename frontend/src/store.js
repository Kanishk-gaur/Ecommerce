import {  combineReducers,createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { newProductReducer, newReviewReducer, productDetailsReducer, productReducer, productReviewsReducer, productsReducer, reviewReducer } from "./reducres/productReducer";
import { configureStore } from '@reduxjs/toolkit'
import {  allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from "./reducres/userReducer";
import { cartReducer } from "./reducres/cartReducer";
import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from "./reducres/orderReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  user:userReducer,
  profile:profileReducer,
  forgotPassword:forgotPasswordReducer,
  cart:cartReducer,
  newOrder:newOrderReducer,
  myOrders:myOrdersReducer,
  orderDetails:orderDetailsReducer,
  newReview: newReviewReducer,
  newProduct:newProductReducer,
  product:productReducer,
  allOrders:allOrdersReducer,
  order:orderReducer,
  allUsers:allUsersReducer,
  userDetails:userDetailsReducer,
  productReviews:productReviewsReducer,
  reviews:reviewReducer,
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