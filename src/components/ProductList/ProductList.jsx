import React, { useState } from "react";
import products from "../../api/products.json";
import BeforeCart from "./cartButtons/BeforeCart";
import AfterCart from "./cartButtons/AfterCart";
import "../ProductList/ProductList.css";

const ProductList = () => {
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount(1);
  };

  return (
    <section className="container">
      {products.map((products, key) => (
        <div className="product-container" key={key}>
          <img src={products.image} alt="" />
          <h3>{products.title}</h3>
{count>0 ? <AfterCart /> :<BeforeCart addToCart={addToCart} />}
          
        
        </div>
      ))}
    </section>
  );
};

export default ProductList;
