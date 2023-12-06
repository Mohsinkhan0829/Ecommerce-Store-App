import React, { useContext } from 'react'
import { AllProducts } from '../../Components/Context/ProductContext';

const ProductDisplay = (Props) => {
    const {Product} = Props;
    const {addToCart}=useContext(AllProducts);
  return (
    <section id="pro-details" class="section-p1" >
        <div class="single-pro-img">
            <img src={Product.image} width="100%" id="mainimg" alt=""/>
        </div>

        <div class="s-pro-details">
            <h6>Home / T-shirt</h6>
            <h4>{Product.name}</h4>
            <h2>${Product.Price}</h2>
            <select>
                <option>select size</option>
                <option>XL</option>
                <option>XXl</option>
                <option>small</option>
                <option>Large</option>
            </select>
            <button onClick={()=>{addToCart(Product.id)}} >Add to cart</button>
            <h4>Product details</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem perferendis tempore nobis harum
                magni, rerum voluptatum quaerat quod obcaecati nostrum consectetur nisi recusandae qui maxime non
                doloribus corporis minima!
            </span>

        </div>
        </section>
  )
}

export default ProductDisplay
