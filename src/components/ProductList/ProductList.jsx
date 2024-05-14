
import products from "../../api/products.json";
import BeforeCart from "./cartButtons/BeforeCart";
import AfterCart from "./cartButtons/AfterCart";
import { useSelector } from "react-redux";
import "./ProductList.css";


const ProductList = () => {

const {cartCount} = useSelector((state)=> state.cart)



  return (
    <section className="container">
      {products.map((products, key) => (
        <div className="product-container" key={key}>
          <img src={products.image} alt="" />
          <h3>{products.title}</h3>
{cartCount>0 ? <AfterCart/> : <BeforeCart />}
 
        </div>
      ))}
    </section>
  );
};

export default ProductList;
