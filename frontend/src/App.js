import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store"
import { loadUser, } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js"
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import { RequireAuth } from "./component/Route/PrivateRoute";
import UpdateProfile from "./component/User/UpdateProfile";




function App() {

 const {isAuthenticated,user}= useSelector(state=>state.user)


  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);
  

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user}/>}
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
        <Route path='/account' element= {<RequireAuth> <Profile/></RequireAuth>}/>
        <Route path='/me/update' element= {<RequireAuth> <UpdateProfile/></RequireAuth>}/>
      

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
