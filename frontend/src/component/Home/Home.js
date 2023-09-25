import React, { Fragment } from 'react'
import {CgMouse} from "react-icons/cg"
import "./Home.css"
import Product from "./Product.js"



const product={
  name:"Blue Shirt",
  images:[{url:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1690432897_9790694.jpg?format=webp&w=768&dpr=1.3"}],
  price:"2000",
  _id:"Kanishk"
}


const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCT</h1>
          <a href='#container'>
            <button>
              Scroll<CgMouse/>
            </button>
          </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id='container'>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
      </div>
    </Fragment>
  )
}

export default Home
