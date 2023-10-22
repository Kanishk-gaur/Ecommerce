import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import WebFont from "webfontloader";
import React, { useState, useEffect } from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store"
import { loadUser, updatePassword, } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js"
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import { RequireAuth } from "./component/Route/PrivateRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword"
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart"
import Shipping from "./component/Cart/Shipping"
import ConfirmOrder from "./component/Cart/ConfirmOrder"
import axios from "axios";
import Payment from "./component/Cart/Payment"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


function App() {

  const { isAuthenticated, user } = useSelector(state => state.user);

  //const [stripeApiKey, setstripeApiKey] = useState("");

  //  async function getStripeApiKey() {
  //     const data= "sk_test_51O2zCCSIPg36jqFm8CWJ8QGuAsnSUEz7BXQ1PnaDY78jaKoAOIjdPPOZt2E7pRE8KgB18LVzk8JJwjS8zZzkzzR800uHxOBzV3"
  //     setstripeApiKey(data);
  //  }


  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());

    //getStripeApiKey();
  }, []);
 


  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/login" element={<LoginSignUp />} />
        {/* <ProtectedRoute path="/account" element={<Profile/>} /> */}
        {/* <Route path='/account' element={<ProtectedRoute> <Profile/>  </ProtectedRoute> }/>
  */}
        <Route path='/account' element={<RequireAuth> <Profile /></RequireAuth>} />
        <Route path='/me/update' element={<RequireAuth> <UpdateProfile /></RequireAuth>} />
        <Route path='/password/update' element={<RequireAuth> <UpdatePassword /></RequireAuth>} />
        <Route exact path='/password/forgot' element={<ForgotPassword />} />
        <Route exact path='/password/reset/:token' element={<ResetPassword />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route path='/login/shipping' element={<RequireAuth> <Shipping /></RequireAuth>} />
        <Route path='/order/confirm' element={<RequireAuth> <ConfirmOrder /></RequireAuth>} />

        {/* {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <Route path='/process/payment' element={<RequireAuth> <Payment /></RequireAuth>} />
          </Elements>
        )} */}

        <Route path='/process/payment' element={<Elements stripe={loadStripe("sk_test_51O2zCCSIPg36jqFm8CWJ8QGuAsnSUEz7BXQ1PnaDY78jaKoAOIjdPPOZt2E7pRE8KgB18LVzk8JJwjS8zZzkzzR800uHxOBzV3")} ><RequireAuth> <Payment /></RequireAuth> </Elements>} />
        {/* <Route path='/process/payment' element={<Elements ><RequireAuth> <Payment /></RequireAuth> </Elements>} /> */}


      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
