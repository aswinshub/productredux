import React from 'react'
import products from '../../api/products.json'
import BeforeCart from './cartButtons/BeforeCart'
import AfterCart from './cartButtons/AfterCart'
import '../ProductList/ProductList.css'




const ProductList = () => {
  return <section className='container'>
{products.map((products,key)=>(
<div className="product-container" key={key}>

<img src={products.image} alt="" />
<h3>{products.title}</h3>

<BeforeCart/>
<AfterCart/>


</div>

))}

  </section>
}

export default ProductList
