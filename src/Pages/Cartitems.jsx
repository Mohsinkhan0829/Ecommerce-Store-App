import React, { useContext } from "react";
import { AllProducts } from "../Components/Context/ProductContext";

const Cartitems = () => {
  const { AllProductsData, cartItem, removeFromCart } = useContext(AllProducts);
  return (
    <div className="CartItems">
      <div className="cartItem-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>total</p>
        <p>Remove</p>
      </div>
      <hr />
    {AllProductsData.map((e)=>{
        if(cartItem[e.id]>0) 
        {
            return <div>
            <div className='cartItem-format cartItem-main'>
            <img src={e.image} alt="" />
            <p>{e.name}</p>
            <p>${e.Price}</p>
            <button className="cartItem-Quantity">{cartItem[e.id]}</button>
            <p>${e.Price*cartItem[e.id]}</p>
            <button className="RemoveButton" onClick={()=>{removeFromCart(e.id)} }>Remove</button>
          </div>
          <hr />
          </div>
        }
        return null
    })}
    </div>
  );
};

export default Cartitems;
